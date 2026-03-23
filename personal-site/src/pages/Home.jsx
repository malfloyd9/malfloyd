import Hero from '../components/Hero'
import NowSection from '../components/NowSection'
import ProjectCard from '../components/ProjectCard'
import { getFeatured } from '../data/projects'
import { usePageSEO } from '../hooks/usePageSEO'

export default function Home() {
  usePageSEO({
    title: 'Home',
    description:
      'Jeff Floyd — data center hardware planner. Systems, workshop, and lab projects.',
  })

  const featured = getFeatured()

  return (
    <>
      <Hero />
      <NowSection />
      <section
        className="border-b border-oak/10 px-4 py-14 md:px-8"
        aria-labelledby="featured-heading"
      >
        <div className="mx-auto max-w-6xl">
          <h2
            id="featured-heading"
            className="text-center text-sm font-semibold uppercase tracking-wider text-text-secondary"
          >
            Featured work
          </h2>
          <div className="mt-10 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {featured.map((p) => (
              <ProjectCard key={p.slug} project={p} />
            ))}
          </div>
        </div>
      </section>
    </>
  )
}
