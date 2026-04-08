import Link from "next/link";

export default function Home() {
  const hasSupabase =
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_URL) &&
    Boolean(process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY);

  const studioUrl = process.env.NEXT_PUBLIC_SUPABASE_STUDIO_URL?.trim();

  return (
    <div className="flex min-h-full flex-1 flex-col">
      <header className="border-b border-indigo-900/50 bg-[#0d1224]/90 backdrop-blur">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-6 py-4">
          <span
            className="text-xl font-bold tracking-tight text-indigo-200"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            DD CRM
          </span>
          <span className="rounded-full bg-indigo-500/15 px-3 py-1 text-xs text-indigo-300/90">
            ddcrm.jbapex.com.br
          </span>
        </div>
      </header>

      <main className="mx-auto flex w-full max-w-5xl flex-1 flex-col justify-center gap-10 px-6 py-16">
        <div className="space-y-4">
          <p className="text-sm font-medium uppercase tracking-[0.2em] text-indigo-400/90">
            Front dedicado
          </p>
          <h1
            className="max-w-2xl text-4xl font-bold leading-tight text-white sm:text-5xl"
            style={{ fontFamily: "var(--font-display), system-ui, sans-serif" }}
          >
            CRM no domínio próprio, ligado ao Supabase.
          </h1>
          <p className="max-w-xl text-lg text-zinc-400">
            Next.js + <code className="text-indigo-300/80">@supabase/ssr</code>{" "}
            para <strong className="text-zinc-200">ddcrm.jbapex.com.br</strong>.
          </p>
        </div>

        <div className="grid gap-4 sm:grid-cols-2">
          <div className="rounded-2xl border border-indigo-800/40 bg-indigo-950/25 p-6">
            <h2 className="text-sm font-semibold text-indigo-200">Supabase</h2>
            {hasSupabase ? (
              <p className="mt-2 text-sm text-zinc-400">
                Variáveis públicas OK. Stack CRM local (Kong distinto do Planeje).
              </p>
            ) : (
              <p className="mt-2 text-sm text-amber-200/90">
                Copia <code className="text-indigo-200">.env.example</code> para{" "}
                <code className="text-indigo-200">.env.local</code>.
              </p>
            )}
          </div>
          <div className="rounded-2xl border border-zinc-800 bg-zinc-900/35 p-6">
            <h2 className="text-sm font-semibold text-zinc-200">Auth</h2>
            <p className="mt-2 text-sm text-zinc-500">
              No Studio local: Authentication → URL Configuration → Redirect URLs
              com o teu domínio.
            </p>
          </div>
        </div>

        <div className="flex flex-col gap-3">
          <p className="text-xs text-zinc-500">
            Supabase <strong className="text-zinc-300">local</strong> (stack CRM).
            <strong className="text-zinc-400"> supabase.com</strong> é nuvem —
            opcional.
          </p>
          <div className="flex flex-wrap items-center gap-3">
            {studioUrl ? (
              <Link
                href={studioUrl}
                className="rounded-xl bg-indigo-500 px-5 py-2.5 text-sm font-medium text-white transition hover:bg-indigo-400"
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
