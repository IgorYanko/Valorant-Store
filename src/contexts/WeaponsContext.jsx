import { createContext, useContext } from 'react'
import { useWeapons } from '../hooks/useWeapons'

const WeaponsContext = createContext(null)

export const WeaponsProvider = ({ children }) => {
  const value = useWeapons()
  return (
    <WeaponsContext.Provider value={value}>{children}</WeaponsContext.Provider>
  )
}

export const useWeaponsContext = () => {
  const context = useContext(WeaponsContext)
  if (!context) {
    throw new Error('useWeaponsContext must be used within a WeaponsProvider')
  }
  return context
}
