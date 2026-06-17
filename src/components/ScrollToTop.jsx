import { useEffect } from 'react'
import { useLocation } from 'react-router-dom'

// Sempre que a rota muda, rola a página para o topo.
// O React Router (modo declarativo com <Routes>) não faz isso automaticamente.
export const ScrollToTop = () => {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo({ top: 0, left: 0, behavior: 'auto' })
  }, [pathname])

  return null
}