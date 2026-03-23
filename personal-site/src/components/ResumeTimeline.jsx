import { Link } from 'react-router-dom'
import { getProject } from '../data/projects'

export default function ResumeTimeline({ experience }) {
  return (
    <ol className="relative space-y-0 border-l border-oak/25 pl-8">
      {experience.map((job, index) => {
        const isActive = index === 0
        return (
          <li key={`${job.company}-${job.role}-${job.period}`} className="pb-12 last:pb-0">
            <span
              className={`absolute -left-[5px] mt-1.5 h-2.5 w-2.5 rounded-full ring-4 ring-surface-1 ${
                isActive ? 'bg-thyme' : 'bg-text-secondary/40'
              }`}
              aria-hidden="true"
            />
            <div className="space-y-2">
              <p className="text-sm font-semibold text-text-primary">{job.company}</p>
              <p className="text-lg font-medium text-text-secondary">{job.role}</p>
              <p className="text-sm text-oak-light">{job.period}</p>
              <p className="max-w-prose leading-relaxed text-text-secondary">
                {job.description}
              </p>
              {(job.linkedProjects ?? []).length > 0 ? (
                <p className="text-sm text-text-secondary">
                  Related work:{' '}
                  {job.linkedProjects.map((slug, i) => {
                    const p = getProject(slug)
                    const href = p ? `/${p.category}/${slug}` : `/systems/${slug}`
                    return (
                      <span key={slug}>
                        {i > 0 ? ', ' : ''}
                        <Link
                          to={href}
                          className="text-bronze underline-offset-4 hover:underline focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1"
                        >
                          {p?.title ?? slug}
                        </Link>
                      </span>
                    )
                  })}
                </p>
              ) : null}
            </div>
          </li>
        )
      })}
    </ol>
  )
}
