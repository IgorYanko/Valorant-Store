import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { useSkinsContext } from './contexts/SkinsContext'
import { ErrorPage, Layout } from './components'
import HomePage from './pages/HomePage'
import SkinsPage from './pages/SkinsPage'
import SkinPage from './pages/SkinPage'
import AboutPage from './pages/AboutPage'
import ContactPage from './pages/ContactPage'

export default function App() {
  const { loading, error } = useSkinsContext()

  if (loading) {
    return <div className="app-loading">Carregando skins...</div>
  }

  if (error) {
    return <ErrorPage message={error} />
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<HomePage />} />
          <Route path="/skins" element={<SkinsPage />} />
          <Route path="/skin/:uuid" element={<SkinPage />} />
          <Route path="/sobre" element={<AboutPage />} />
          <Route path="/contato" element={<ContactPage />} />
          <Route
            path="*"
            element={<ErrorPage message="Página não encontrada." />}
          />
        </Route>
      </Routes>
    </BrowserRouter>
  )
}