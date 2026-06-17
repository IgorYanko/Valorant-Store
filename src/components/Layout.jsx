import { Outlet } from 'react-router-dom'
import { Header } from './Header'
import { Navbar } from './Navbar'
import { Footer } from './Footer'
import { ScrollToTop } from './ScrollToTop'

// Layout compartilhado por todas as páginas: Header + Navbar fixos no topo,
// o conteúdo de cada rota é renderizado pelo <Outlet />, e o Footer no final.
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