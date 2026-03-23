import ResumeTimeline from '../components/ResumeTimeline'
import SkillMap from '../components/SkillMap'
import { resume } from '../data/resume'
import { usePageSEO } from '../hooks/usePageSEO'

export default function ResumePage() {
  usePageSEO({
    title: 'Resume',
    description: `${resume.name} — ${resume.title}. Experience, skills, and education.`,
  })

  return (
    <div className="px-4 py-12 md:px-8 md:py-16">
      <div className="mx-auto max-w-4xl">
        <header className="mb-12 border-b border-oak/20 pb-10">
          <h1 className="text-3xl font-semibold text-text-primary md:text-4xl">
            {resume.name}
          </h1>
          <p className="mt-2 text-xl text-text-secondary">{resume.title}</p>
          <p className="mt-6 max-w-prose leading-relaxed text-text-secondary">
            {resume.summary}
          </p>
          {resume.pdfUrl ? (
            <p className="mt-8">
              <a
                href={resume.pdfUrl}
                className="inline-flex min-h-[44px] items-center justify-center rounded-md border border-bronze/60 px-5 py-2.5 text-sm font-medium text-bronze transition-colors duration-fast hover:border-bronze hover:bg-bronze/10 focus:outline-none focus-visible:ring-2 focus-visible:ring-bronze focus-visible:ring-offset-2 focus-visible:ring-offset-surface-1"
              >
                Download PDF
              </a>
            </p>
          ) : null}
        </header>

        <section className="mb-16" aria-labelledby="experience-heading">
          <h2
            id="experience-heading"
            className="mb-8 text-sm font-semibold uppercase tracking-wider text-thyme"
          >
            Experience
          </h2>
          <ResumeTimeline experience={resume.experience} />
        </section>

        <section className="mb-16" aria-labelledby="skills-heading">
          <h2
            id="skills-heading"
            className="mb-8 text-sm font-semibold uppercase tracking-wider text-thyme"
          >
            Skills
          </h2>
          <SkillMap skills={resume.skills} />
        </section>

        <section aria-labelledby="education-heading">
          <h2
            id="education-heading"
            className="mb-6 text-sm font-semibold uppercase tracking-wider text-thyme"
          >
            Education
          </h2>
          <ul className="space-y-6">
            {resume.education.map((edu) => (
              <li key={edu.institution}>
                <p className="font-medium text-text-primary">{edu.institution}</p>
                <p className="text-text-secondary">{edu.field}</p>
                <p className="text-sm text-oak-light">{edu.period}</p>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  )
}
