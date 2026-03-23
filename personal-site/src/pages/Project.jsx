import { Navigate, useLocation, useParams } from 'react-router-dom'
import ProjectDetail from '../components/ProjectDetail'
import { getProject } from '../data/projects'
import { usePageSEO } from '../hooks/usePageSEO'
import NotFound from './NotFound'

export default function Project() {
  const { slug } = useParams()
  const { pathname } = useLocation()
  const categoryPath = pathname.split('/').filter(Boolean)[0]
  const project = getProject(slug)

  usePageSEO({
    title: project ? project.title : 'Project',
    description: project?.purpose ?? undefined,
  })

  if (project && project.category !== categoryPath) {
    return <Navigate to={`/${project.category}/${slug}`} replace />
  }

  if (!project) {
    return <NotFound />
  }

  return (
    <div className="bg-surface-1">
      <ProjectDetail project={project} categoryPath={categoryPath} />
    </div>
  )
}
