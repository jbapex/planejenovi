import Link from "next/link";

export default function Home() {
  const hasSupabase =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const studioUrl = process.env.NEXT_PUBLIC_SUPABASE_STUDIO_URL?.trim();

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <header className="border-b border-emerald-900/40 bg-[#0f221c]/80 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span
            className="text-xl font-semibold tracking-tight text-emerald-200"
            style={{
              fontFamily: "var(--font-display), ui-serif, Georgia, serif",
            }}
          >
            DD Planeje
          </span>
          <span className="rounded-full bg-emerald-500/10 px-3 py-1 text-xs text-emerald-300/90">
            ddplaneje.jbapex.com.br
          </span>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-10 px-6 py-16">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-emerald-500/80">
            Front dedicado
          </p>
          <h1
            className="max-w-2xl text-4xl font-semibold leading-tight text-white sm:text-5xl"
            style={{
              fontFamily: "var(--font-display), ui-serif, Georgia, serif",
            }}
          >
            Planejamento e operações no domínio certo.
          </h1>
          <p className="max-w-xl text-lg text-zinc-400">
            Esta app Next.js está preparada para deploy em{" "}
            <strong className="text-zinc-200">ddplaneje.jbapex.com.br</strong>{" "}
            com cliente Supabase (`@supabase/ssr`).
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-emerald-800/50 bg-emerald-950/30 p-6">
            <h2 className="text-sm font-semibold text-emerald-200">Supabase</h2>
            {hasSupabase ? (
              <p className="mt-2 text-sm text-zinc-400">
                Variáveis <code className="text-emerald-300/90">NEXT_PUBLIC_*</code>{" "}
                configuradas. Usa{" "}
                <code className="text-emerald-300/90">createClient()</code> em
                cliente e servidor.
              </p>
            ) : (
              <p className="mt-2 text-sm text-amber-200/90">
                Copia <code className="text-emerald-200">.env.example</code> para{" "}
                <code className="text-emerald-200">.env.local</code>.
              </p>
            )}
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/40 p-6">
            <h2 className="text-sm font-semibold text-zinc-200">Deploy</h2>
            <p className="mt-2 text-sm text-zinc-500">
              Monorepo em <code className="text-zinc-400">jbapex</code>; ver{" "}
              <code className="text-zinc-400">deploy/</code> para Nginx e systemd.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs text-zinc-500">
            Supabase <strong className="text-zinc-300">local</strong> (Docker na
            VPS). O botão verde abre o <strong className="text-zinc-300">Studio</strong>
            . <strong className="text-zinc-400">supabase.com</strong> é conta na
            nuvem (hosted) — opcional.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {studioUrl ? (
              <Link
                href={studioUrl}
                className="rounded-xl bg-emerald-500 px-5 py-2.5 text-sm font-medium text-emerald-950 transition hover:bg-emerald-400"
                target="_blank"
                rel="noreferrer"
              >
                Abrir Studio local
              </Link>
            ) : null}
            <a
              href="https://supabase.com/dashboard"
              className="text-xs text-zinc-500 underline decoration-zinc-600 underline-offset-2 hover:text-zinc-400"
              target="_blank"
              rel="noreferrer"
            >
              Conta Supabase na nuvem (opcional)
            </a>
          </div>
        </div>
      </main>
    </div>
  );
}
