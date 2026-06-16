import { BrowserRouter, Routes, Route } from 'react-router-dom'
import './App.css'
import { useSkinsContext } from './contexts/SkinsContext'
import { ErrorPage } from './components'
import HomePage from './pages/HomePage'
import SkinPage from './pages/SkinPage'

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
        <Route path="/" element={<HomePage />} />
        <Route path="/skin/:uuid" element={<SkinPage />} />
      </Routes>
    </BrowserRouter>
  )
}
