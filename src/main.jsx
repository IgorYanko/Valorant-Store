import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'
import { SkinsProvider } from './contexts/SkinsContext.jsx'
import { WeaponsProvider } from './contexts/WeaponsContext.jsx'
import { FilterProvider } from './contexts/FilterContext.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <SkinsProvider>
      <WeaponsProvider>
        <FilterProvider>
          <App />
        </FilterProvider>
      </WeaponsProvider>
    </SkinsProvider>
  </StrictMode>,
)
