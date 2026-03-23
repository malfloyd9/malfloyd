import ProjectCard from '../components/ProjectCard'
import { getProjects } from '../data/projects'
import { usePageSEO } from '../hooks/usePageSEO'

export default function Lab() {
  usePageSEO({
    title: 'Lab',
    description:
      'Experiments and prototypes: Night Studio, Flizzlr, and forward-looking UI sketches.',
  })

  const list = getProjects('lab')

  return (
    <div className="px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-6xl">
        <header className="mb-12 max-w-2xl">
          <h1 className="text-3xl font-semibold text-text-primary md:text-4xl">Lab</h1>
          <p className="mt-4 leading-relaxed text-text-secondary">
            Sandboxed ideas and software sketches—some ship, some teach, all stay
            intentionally small.
          </p>
        </header>
        <div className="grid max-w-6xl gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {list.map((p) => (
            <ProjectCard key={p.slug} project={p} />
          ))}
        </div>
      </div>
    </div>
  )
}
