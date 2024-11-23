
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

## Endpoints

### **1. Criar uma Conta**
`POST /accounts`

**Exemplo de Requisição:**
```json
{
  "name": "Conta Principal"
}
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

### **2. Listar Todas as Contas**
`GET /accounts`

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

### **3. Consultar Saldo**
`GET /accounts/:id/balance`

**Exemplo de Resposta:**
```json
{
  "balance": 150.75
}
```

---

### **4. Criar uma Transação**
`POST /transactions`

**Exemplo de Requisição (Entrada):**
```json
{
  "accountId": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
  "type": "entrada",
  "amount": 150.75
}
```

**Exemplo de Requisição (Saída):**
```json
{
  "accountId": "a1b2c3d4-e5f6-7g8h-9i0j-k1l2m3n4o5p6",
  "type": "saida",
  "amount": 50.25
}
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

---

## Testes
Você pode usar ferramentas como Postman, Insomnia ou `curl` para testar os endpoints.

**Exemplo de teste com `curl`:**
```bash
curl -X POST http://localhost:3000/accounts -H "Content-Type: application/json" -d '{"name": "Conta Principal"}'
```

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

