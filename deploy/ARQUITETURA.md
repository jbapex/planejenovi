# Arquitetura (VPS)

| App | Domínio | Front em produção | Supabase CLI (pasta) | Kong | Postgres | Studio (DNS + Nginx) |
|-----|---------|-------------------|------------------------|------|----------|----------------------|
| Planeje | ddplaneje.jbapex.com.br | **Vite estático** em `/var/www/ddplaneje-vite` (Nginx) + snippet Kong | meu-projeto-supabase | 54321 | 54322 | studio-planeje.jbapex.com.br |
| CRM | ddcrm.jbapex.com.br | Next (3001) | segundo-projeto-supabase | 55321 | 55322 | studio-crm.jbapex.com.br |

**DD Planeje (app completa):** usar `deploy/nginx-ddplaneje-static.conf` em `sites-available`. Build: `npm run build -w planeje-vite` com `apps/planeje-vite/.env.production.local` (`VITE_SUPABASE_URL`, `VITE_SUPABASE_ANON_KEY`). Publicar: `./deploy/publish-planeje-vite.sh`.

O serviço `dd-planeje` (Next na 3000) deixou de ser usado pelo domínio principal; pode manter parado ou para desenvolvimento local.

Ficheiros de exemplo Nginx nesta pasta; copiar para `/etc/nginx/sites-available/` na VPS.

**Não commits:** `.env.local`, `.env.production.local`, chaves reais.
