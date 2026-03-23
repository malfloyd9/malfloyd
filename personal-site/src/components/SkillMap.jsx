const groupLabels = {
  infrastructure: 'Infrastructure',
  networking: 'Networking',
  tools: 'Tools',
  building: 'Building',
  craft: 'Craft',
}

export default function SkillMap({ skills }) {
  return (
    <div className="grid gap-10 md:grid-cols-2">
      {Object.entries(skills).map(([key, items]) => (
        <section key={key} aria-labelledby={`skill-${key}`}>
          <h3
            id={`skill-${key}`}
            className="mb-4 text-sm font-semibold uppercase tracking-wider text-oak"
          >
            {groupLabels[key] ?? key}
          </h3>
          <ul className="flex flex-wrap gap-2">
            {items.map((skill) => (
              <li
                key={skill}
                className="rounded-full border border-thyme/30 bg-thyme/10 px-3 py-1.5 text-sm text-text-primary"
              >
                {skill}
              </li>
            ))}
          </ul>
        </section>
      ))}
    </div>
  )
}
