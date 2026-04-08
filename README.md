# jbapex

Monorepo npm workspaces:

| Pasta | Stack | Notas |
|--------|--------|--------|
| `apps/planeje-vite` | React + Vite | **Planeje completo** (UI principal, Supabase, docs, SQL, `supabase/`) |
| `apps/planeje` | Next.js 16 | Portal SSR leve (Tailwind + `@supabase/ssr`) |
| `apps/crm` | Next.js 16 | DD CRM |

## Desenvolvimento

```bash
npm install
npm run dev:planeje-vite   # Planeje completo — Vite, porta 3003
npm run dev:planeje        # Next DD Planeje — porta 3000
npm run dev:crm            # porta 3001
```

Ambiente:

- `apps/planeje-vite`: copia `apps/planeje-vite/.env.example` → `.env` na mesma pasta.
- `apps/planeje` e `apps/crm`: copia cada `.env.example` → `.env.local`.

## Produção

```bash
npm run build
npm run preview -w planeje-vite   # ou servir `apps/planeje-vite/dist` com Nginx
npm run start -w planeje          # Next — ou systemd em `deploy/*.service`
```

## Deploy / VPS

Ver `deploy/ARQUITETURA.md` e ficheiros `nginx-*.conf` (exemplos para Nginx).
