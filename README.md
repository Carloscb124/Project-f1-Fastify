
# Project‑f1‑Fastify

Uma **Minimal API** em Node.js desenvolvida com **Fastify** (em TypeScript), criada para gerenciar dados fictícios de equipes e pilotos da F1. Agora também com suporte a **CORS**, permitindo que qualquer aplicação frontend consuma a API sem bloqueios.

---

##  Funcionalidades principais

- Endpoints REST simples para obter dados em JSON:
  - `GET /teams` — Lista todas as equipes.
  - `GET /drivers` — Lista todos os pilotos.
  - `GET /drivers/:id` — Busca a equipe e os pilotos pelo ID; retorna **202** se encontrado, ou **404** com mensagem de erro caso contrário.

- Plugin **@fastify/cors** configurado com `origin: "*"`, permitindo acessos públicos (ideal para integrações com frontends).

---

##  Tecnologias utilizadas

- **Node.js** com **TypeScript**
- **Fastify** — framework backend rápido e leve
- **@fastify/cors** — habilita CORS de forma simples
- **ts-node** ou **tsx** — para executar TypeScript diretamente (dependendo da sua configuração)

---

##  Como executar

1. Clone o repositório  
   ```bash
   git clone https://github.com/Carloscb124/Project-f1-Fastify.git
   cd Project-f1-Fastify
   ```

2. Instale as dependências  
   ```bash
   npm install
   ```

3. Execute o servidor em modo de desenvolvimento  
   ```bash
   npm run dev
   ```
   *(ou `npm start` conforme seu setup)*

4. A API deve subir na porta **3333**. Você pode testar com:
   - `GET http://localhost:3333/teams`
   - `GET http://localhost:3333/drivers`
   - `GET http://localhost:3333/drivers/2`

---

##  Estrutura do projeto

```
├── src/
│   └── index.ts            # Onde estão definidas rotas, dados e configurações
├── package.json
├── tsconfig.json
└── README.md
```

---

##  Próximos passos

- Adicionar rotas **POST**, **PUT**, **DELETE** para operações de manipulação de dados.
- Integrar com um **banco de dados** (ex. SQLite, PostgreSQL, MongoDB).
- Documentar a API usando **Swagger/OpenAPI**.
- Ideal para criar um CRUD completo ou servir como base para projetos mais complexos.

---

