import { createContext, useContext } from "react"
import { useSkins } from "../hooks"

const SkinsContext = createContext(null)

export const SkinsProvider = ({ children }) => {
  const value = useSkins();
  return (
    <SkinsContext.Provider value={value}>{children}</SkinsContext.Provider>
  )
}

export const useSkinsContext = () => {
  const context = useContext(SkinsContext)
  if (!context) {
    throw new Error('useSkinsContext must be used within a SkinsProvider')
  }
  return context
}
