import { Outlet } from 'react-router-dom'
import { Header, Navbar, Footer, ScrollToTop } from '../components'

export const Layout = () => {
  return (
    <>
      <ScrollToTop />
      <Header />
      <Navbar />
      <main className="page-content">
        <Outlet />
      </main>
      <Footer />
    </>
  )
}