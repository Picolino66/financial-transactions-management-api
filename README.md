
# Financial Transactions Management API

Esta é uma API REST para o gerenciamento de transações financeiras, como entradas e saídas, além de consulta de saldo em contas. O projeto foi desenvolvido como parte de um teste técnico.

## Tecnologias Utilizadas
- **Node.js**
- **NestJS**
- **TypeScript**

---

## Funcionalidades
- Criar contas financeiras.
- Listar todas as contas.
- Consultar saldo de uma conta específica.
- Registrar transações (entrada e saída).
- Garantir que o saldo da conta nunca fique negativo.

---

## Instalação

### Pré-requisitos
- Node.js (versão 16+)
- npm ou yarn

### Passos
1. Clone este repositório:
   ```bash
   git clone https://github.com/Picolino66/financial-transactions-management-api.git
   cd financial-transactions-management-api
   ```

2. Instale as dependências:
   ```bash
   npm install
   ```

3. Inicie a aplicação:
   ```bash
   npm run start
   ```

---

## Endpoints e Testes

Você pode usar ferramentas como Postman, Insomnia ou `curl` para testar os endpoints.


# Exemplos de Teste com curl

Aqui estão exemplos de como testar todos os endpoints da API usando `curl`.

---

## **1. Criar uma Conta**
### Endpoint: `POST /accounts`

**Exemplo de Comando:**
```bash
curl -X POST http://localhost:3000/accounts -H "Content-Type: application/json" -d '{"name": "Conta Principal"}'
```

**Exemplo de Resposta:**
```json
{
  "id": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
  "name": "Conta Principal",
  "balance": 0
}
```

---

## **2. Listar Todas as Contas**
### Endpoint: `GET /accounts`

**Exemplo de Comando:**
```bash
curl -X GET http://localhost:3000/accounts
```

**Exemplo de Resposta:**
```json
[
  {
    "id": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
    "name": "Conta Principal",
    "balance": 100.5
  },
  {
    "id": "z9y8x7w6-v5u4-t3s2-r1q0-p9o8n7m6l5k4",
    "name": "Conta Secundária",
    "balance": 200.0
  }
]
```

---

## **3. Consultar Saldo de uma Conta**
### Endpoint: `GET /accounts/:id/balance`

**Exemplo de Comando:**
```bash
curl -X GET http://localhost:3000/accounts/a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6/balance
```

**Exemplo de Resposta:**
```json
{
  "balance": 150.75
}
```

---

## **4. Criar uma Transação**
### Endpoint: `POST /transactions`

#### **Transação de Entrada**
**Exemplo de Comando:**
```bash
curl -X POST http://localhost:3000/transactions -H "Content-Type: application/json" -d '{"accountId": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6", "type": "entrada", "amount": 150.75}'
```

**Exemplo de Resposta:**
```json
{
  "id": "z9y8x7w6-v5u4-t3s2-r1q0-p9o8n7m6l5k4",
  "accountId": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
  "type": "entrada",
  "amount": 150.75
}
```

#### **Transação de Saída**
**Exemplo de Comando:**
```bash
curl -X POST http://localhost:3000/transactions -H "Content-Type: application/json" -d '{"accountId": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6", "type": "saida", "amount": 50.25}'
```

**Exemplo de Resposta:**
```json
{
  "id": "y8x7w6v5-u4t3-s2r1-q0p9-o8n7m6l5k4",
  "accountId": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
  "type": "saida",
  "amount": 50.25
}
```

---

## Observação
Certifique-se de substituir os IDs nos exemplos pelos valores gerados no seu ambiente.
---

## Estrutura do Projeto
```
src/
├── accounts/
│   ├── accounts.controller.ts
│   ├── accounts.service.ts
│   └── account.entity.ts
├── transactions/
│   ├── transactions.controller.ts
│   ├── transactions.service.ts
│   └── transaction.entity.ts
├── app.module.ts
```

---

## Autor
Desenvolvido por Isaías Gonçalves Ribeiro.

