import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'


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