import { Link } from 'react-router-dom'
import StatusBadge from './StatusBadge'

const categoryLabel = {
  systems: 'Systems',
  workshop: 'Workshop',
  lab: 'Lab',
}

const sections = [
  { key: 'problem', title: 'Problem' },
  { key: 'purpose', title: 'Purpose' },
  { key: 'solution', title: 'Solution' },
  { key: 'outcome', title: 'Outcome' },
]

export default function ProjectDetail({ project, categoryPath }) {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10 md:px-6 md:py-14">
      <nav className="mb-8 text-sm" aria-label="Breadcrumb">
        <ol className="flex flex-wrap items-center gap-2 text-text-secondary">
          <li>
            <Link
              to={`/${categoryPath}`}
              className="text-bronze underline-offset-4 transition-colors duration-fast hover:text-bronze-light hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1"
            >
              {categoryLabel[categoryPath]}
            </Link>
          </li>
          <li aria-hidden="true">/</li>
          <li className="text-text-primary">{project.title}</li>
        </ol>
      </nav>

      <header className="mb-10 border-b border-oak/25 pb-8">
        <div className="mb-4 flex flex-wrap items-center gap-3">
          <StatusBadge status={project.status} />
        </div>
        <h1 className="text-3xl font-semibold tracking-tight text-text-primary md:text-4xl">
          {project.title}
        </h1>
      </header>

      {project.image ? (
        <div className="mb-10 overflow-hidden rounded-lg border border-oak/20">
          <img
            src={project.image}
            alt=""
            className="w-full object-cover"
            loading="lazy"
          />
        </div>
      ) : null}

      <div className="space-y-10">
        {sections.map(({ key, title }) => (
          <section key={key} aria-labelledby={`${key}-heading`}>
            <h2
              id={`${key}-heading`}
              className="mb-3 text-sm font-semibold uppercase tracking-wider text-oak"
            >
              {title}
            </h2>
            <p className="leading-relaxed text-text-secondary">{project[key]}</p>
          </section>
        ))}

        <section aria-labelledby="tools-heading">
          <h2
            id="tools-heading"
            className="mb-3 text-sm font-semibold uppercase tracking-wider text-oak"
          >
            Tools
          </h2>
          <ul className="flex flex-wrap gap-2">
            {(project.tools ?? []).map((tool) => (
              <li
                key={tool}
                className="rounded-full border border-oak/35 bg-oak/10 px-3 py-1.5 text-sm text-text-primary"
              >
                {tool}
              </li>
            ))}
          </ul>
        </section>
      </div>

      {project.link ? (
        <p className="mt-12">
          <a
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex min-h-[44px] min-w-[44px] items-center justify-center rounded-md bg-bronze px-5 py-2.5 text-sm font-medium text-void transition-colors duration-fast hover:bg-bronze-light focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1"
          >
            View repo or demo
          </a>
        </p>
      ) : null}

      <p className="mt-10">
        <Link
          to={`/${categoryPath}`}
          className="text-bronze underline-offset-4 transition-colors duration-fast hover:text-bronze-light hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1"
        >
          ← Back to {categoryLabel[categoryPath]}
        </Link>
      </p>
    </article>
  )
}
