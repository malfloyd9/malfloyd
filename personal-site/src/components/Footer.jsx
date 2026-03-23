export default function Footer() {
  return (
    <footer className="border-t border-oak/15 bg-surface-1">
      <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-8 text-center text-sm text-text-secondary md:flex-row md:items-center md:justify-between md:text-left">
        <p>© {new Date().getFullYear()} Jeff Floyd. Built with React & Tailwind.</p>
        <p className="text-text-secondary/80">
          Data center planning, workshop craft, lab experiments.
        </p>
      </div>
    </footer>
  )
}
