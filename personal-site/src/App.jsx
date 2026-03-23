import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Layout from './components/Layout'
import Home from './pages/Home'
import Systems from './pages/Systems'
import Workshop from './pages/Workshop'
import Lab from './pages/Lab'
import Resume from './pages/Resume'
import Project from './pages/Project'
import NotFound from './pages/NotFound'

export default function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route index element={<Home />} />
          <Route path="systems" element={<Systems />} />
          <Route path="systems/:slug" element={<Project />} />
          <Route path="workshop" element={<Workshop />} />
          <Route path="workshop/:slug" element={<Project />} />
          <Route path="lab" element={<Lab />} />
          <Route path="lab/:slug" element={<Project />} />
          <Route path="resume" element={<Resume />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}
