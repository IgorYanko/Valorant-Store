import { useState, useEffect } from 'react'
import { getSkinByUuid } from '../services/getService'
import { useSkinsContext } from '../contexts/SkinsContext'

export const useSkin = (uuid) => {
  const { skins } = useSkinsContext()
  const cachedSkin = skins.find((skin) => skin.uuid === uuid)

  const [fetchedSkin, setFetchedSkin] = useState(null)
  const [loading, setLoading] = useState(false)
  const [error, setError] = useState(null)

  useEffect(() => {
    if (cachedSkin) return

    let cancelled = false

    async function loadSkin() {
      try {
        setLoading(true)
        setError(null)
        const data = await getSkinByUuid(uuid)
        if (!cancelled) setFetchedSkin(data)
      } catch (err) {
        if (!cancelled) {
          setError(err.message ?? 'Erro ao carregar skin')
          setFetchedSkin(null)
        }
      } finally {
        if (!cancelled) setLoading(false)
      }
    }

    loadSkin()

    return () => {
      cancelled = true
    }
  }, [uuid, cachedSkin])

  const skin = cachedSkin ?? (fetchedSkin?.uuid === uuid ? fetchedSkin : null)

  return {
    skin,
    loading: !cachedSkin && loading,
    error: cachedSkin ? null : error,
  }
}
