#!/usr/bin/env bash
# Após `npm run build -w planeje-vite`, publica ficheiros para o Nginx (www-data).
set -euo pipefail
ROOT="$(cd "$(dirname "$0")/.." && pwd)"
DIST="$ROOT/apps/planeje-vite/dist"
TARGET="${PLANEJE_VITE_WWW:-/var/www/ddplaneje-vite}"

if [[ ! -f "$DIST/index.html" ]]; then
  echo "Erro: faça o build primeiro: npm run build -w planeje-vite" >&2
  exit 1
fi

sudo mkdir -p "$TARGET"
sudo rsync -a --delete "$DIST/" "$TARGET/"
sudo chown -R www-data:www-data "$TARGET"
echo "Publicado em $TARGET — recarregue o Nginx se alterou a config: sudo systemctl reload nginx"
