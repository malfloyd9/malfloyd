import { useEffect } from 'react'

const defaultTitle = 'Jeff Floyd | Data Center Hardware Planner'
const defaultDescription =
  'Data center hardware planner and builder. Systems work, workshop craft, and lab experiments — portfolio, resume, and projects.'

export function usePageSEO({ title, description }) {
  useEffect(() => {
    document.title = title ? `${title} | Jeff Floyd` : defaultTitle
    let meta = document.querySelector('meta[name="description"]')
    if (!meta) {
      meta = document.createElement('meta')
      meta.setAttribute('name', 'description')
      document.head.appendChild(meta)
    }
    meta.setAttribute('content', description ?? defaultDescription)
  }, [title, description])
}
