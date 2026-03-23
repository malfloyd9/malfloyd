import { Link } from 'react-router-dom'

export default function Hero() {
  return (
    <section
      className="relative overflow-hidden border-b border-oak/10 bg-void px-4 py-16 md:px-8 md:py-24"
      aria-labelledby="hero-heading"
    >
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.03]"
        style={{
          backgroundImage: `url("data:image/svg+xml,%3Csvg viewBox='0 0 256 256' xmlns='http://www.w3.org/2000/svg'%3E%3Cfilter id='n'%3E%3CfeTurbulence type='fractalNoise' baseFrequency='0.9' numOctaves='4' stitchTiles='stitch'/%3E%3C/filter%3E%3Crect width='100%25' height='100%25' filter='url(%23n)' opacity='0.65'/%3E%3C/svg%3E")`,
        }}
        aria-hidden="true"
      />
      <div className="relative mx-auto max-w-3xl text-center">
        <h1
          id="hero-heading"
          className="text-4xl font-semibold tracking-tight text-text-primary md:text-5xl"
        >
          Jeff Floyd
        </h1>
        <p className="mt-3 text-lg text-text-secondary md:text-xl">
          Data Center Hardware Planner
        </p>
        <p className="mx-auto mt-6 max-w-xl text-pretty text-text-secondary">
          Calm, material-driven workspace: systems credibility, workshop craft,
          and lab experiments—documented here for peers and future you.
        </p>
        <div className="mt-10 flex flex-col items-stretch justify-center gap-3 sm:flex-row sm:flex-wrap sm:justify-center">
          <Link
            to="/systems"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md bg-bronze px-6 py-3 text-sm font-medium text-void transition-colors duration-fast hover:bg-bronze-light focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-void"
          >
            View Systems
          </Link>
          <Link
            to="/lab"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-bronze/60 px-6 py-3 text-sm font-medium text-bronze transition-colors duration-fast hover:border-bronze hover:bg-bronze/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-void"
          >
            Enter Lab
          </Link>
          <Link
            to="/resume"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md border border-bronze/60 px-6 py-3 text-sm font-medium text-bronze transition-colors duration-fast hover:border-bronze hover:bg-bronze/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-void"
          >
            Resume
          </Link>
        </div>
      </div>
    </section>
  )
}
