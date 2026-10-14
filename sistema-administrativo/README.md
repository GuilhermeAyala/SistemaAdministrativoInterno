# Sistema Administrativo

Projeto organizado em duas aplicações independentes:

- `frontend/`: interface React + Vite para login, colaboradores e dashboard.
- `backend/`: API/administração com Express, AdminJS e Prisma.

## Frontend

```powershell
cd frontend
npm install
npm run dev
```

Comandos úteis:

```powershell
npm run build
npm run lint
```

## Backend

Copie `backend/.env.example` para `backend/.env` e preencha `DATABASE_URL`.

```powershell
cd backend
npm install
npm run build
npm start
```

### só pra rodar o adminjs
cd "sistema-administrativo/backend"
npm run build
npm start

O painel AdminJS fica disponível em `http://localhost:3000/admin`.

## Estrutura

```text
sistema-administrativo/
├── frontend/
│   ├── public/
│   └── src/
└── backend/
    ├── prisma/
    └── src/
```
