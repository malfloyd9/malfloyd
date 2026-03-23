import { now } from '../data/now'

export default function NowSection() {
  return (
    <section
      className="border-b border-oak/10 bg-surface-1 px-4 py-12 md:px-8"
      aria-labelledby="now-heading"
    >
      <div className="mx-auto max-w-3xl border-l-4 border-oak-dark pl-6 md:pl-8">
        <h2
          id="now-heading"
          className="text-sm font-semibold uppercase tracking-wider text-thyme"
        >
          Current state
        </h2>
        <p className="mt-1 text-xs text-text-secondary/80">
          Updated {now.lastUpdated}
        </p>

        <div className="mt-8 grid gap-10 md:grid-cols-2">
          <div>
            <h3 className="mb-3 text-sm font-medium text-text-primary">
              Building
            </h3>
            <ul className="list-inside list-disc space-y-2 text-text-secondary">
              {now.building.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className="mb-3 text-sm font-medium text-text-primary">
              Learning
            </h3>
            <ul className="list-inside list-disc space-y-2 text-text-secondary">
              {now.learning.map((item) => (
                <li key={item} className="leading-relaxed">
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </div>

        <p className="mt-10 text-pretty text-text-primary">{now.focus}</p>
      </div>
    </section>
  )
}
