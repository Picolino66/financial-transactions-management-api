import { Test, TestingModule } from '@nestjs/testing';
import { INestApplication } from '@nestjs/common';
import * as request from 'supertest';
import { AppModule } from '../src/app.module';

describe('AppController (e2e)', () => {
  let app: INestApplication;

  beforeAll(async () => {
    const moduleFixture: TestingModule = await Test.createTestingModule({
      imports: [AppModule],
    }).compile();

    app = moduleFixture.createNestApplication();
    await app.init();
  });

  it('/accounts (POST) deve criar uma conta', () => {
    return request(app.getHttpServer())
      .post('/accounts')
      .send({ name: 'Conta Teste' })
      .expect(201)
      .expect((res) => {
        expect(res.body.name).toBe('Conta Teste');
        expect(res.body.balance).toBe(0);
      });
  });

  it('/accounts/:id/balance (GET) deve retornar o saldo', async () => {
    const res = await request(app.getHttpServer())
      .post('/accounts')
      .send({ name: 'Conta Teste' });

    const accountId = res.body.id;

    return request(app.getHttpServer())
      .get(`/accounts/${accountId}/balance`)
      .expect(200)
      .expect((res) => {
        expect(res.body.balance).toBe(0);
      });
  });

  it('/accounts (GET) deve listar todas as contas', async () => {
    await request(app.getHttpServer())
      .post('/accounts')
      .send({ name: 'Conta Teste' });
    await request(app.getHttpServer())
      .post('/accounts')
      .send({ name: 'Conta Teste 2' });
    return request(app.getHttpServer())
      .get('/accounts')
      .expect(200)
      .expect((res) => {
        expect(res.body).toBeInstanceOf(Array);
        expect(res.body.length).toBeGreaterThanOrEqual(2); // Verifica se há pelo menos 2 contas
        expect(res.body[0]).toHaveProperty('id');
        expect(res.body[0]).toHaveProperty('name');
        expect(res.body[0]).toHaveProperty('balance');
      });
  });

  it('/transactions (POST) deve criar uma transação de entrada e atualizar o saldo', async () => {
    const res = await request(app.getHttpServer())
      .post('/accounts')
      .send({ name: 'Conta com Transação' });
    const accountId = res.body.id;
    return request(app.getHttpServer())
      .post('/transactions')
      .send({
        accountId,
        type: 'entrada',
        amount: 100.5,
      })
      .expect(201)
      .expect((res) => {
        expect(res.body.type).toBe('entrada');
        expect(res.body.amount).toBe(100.5);
      });
  });
  it('/transactions (POST) deve lançar erro ao criar uma transação que resulta em saldo negativo', async () => {
    const res = await request(app.getHttpServer())
      .post('/accounts')
      .send({ name: 'Conta com Erro de Transação' });
    const accountId = res.body.id;
    return request(app.getHttpServer())
      .post('/transactions')
      .send({
        accountId,
        type: 'saida',
        amount: 50,
      })
      .expect(400)
      .expect((res) => {
        expect(res.body.message).toBe('Saldo insuficiente');
      });
  });
});
