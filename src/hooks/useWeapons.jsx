import { useState, useEffect } from 'react'
import { getWeapons } from '../services/getService'

export const useWeapons = () => {
  const [weapons, setWeapons] = useState([])
  const [loading, setLoading] = useState(true)
  const [error, setError] = useState(null)

  useEffect(() => {
    async function loadWeapons() {
      try {
        setLoading(true)
        setError(null)
        const data = await getWeapons()
        setWeapons(data)
      } catch (err) {
        setError(err.message ?? 'Erro ao carregar armas')
      } finally {
        setLoading(false)
      }
    }

    loadWeapons()
  }, [])

  return { weapons, loading, error }
}
