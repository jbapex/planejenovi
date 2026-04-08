# jbapex

Monorepo npm workspaces com **DD Planeje** (`apps/planeje`) e **DD CRM** (`apps/crm`). Next.js 16 + Tailwind + Supabase (`@supabase/ssr`).

## Desenvolvimento

```bash
npm install
npm run dev:planeje   # porta 3000
npm run dev:crm       # porta 3001
```

Copia `apps/planeje/.env.example` → `.env.local` (e o mesmo para `crm`).

## Produção

```bash
npm run build
npm run start -w planeje   # ou systemd — ver deploy/*.service
```

## Deploy / VPS

Ver `deploy/ARQUITETURA.md` e ficheiros `nginx-*.conf` (exemplos para Nginx).
