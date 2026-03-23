import { Outlet } from 'react-router-dom'
import Nav from './Nav'
import Footer from './Footer'

export default function Layout() {
  return (
    <div className="flex min-h-screen flex-col">
      <Nav />
      <main id="main-content" className="relative flex-1 bg-surface-1">
        <Outlet />
      </main>
      <Footer />
    </div>
  )
}
