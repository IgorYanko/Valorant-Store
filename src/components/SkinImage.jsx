import { useEffect, useMemo, useState } from 'react'
import { getSkinThumbnailUrls } from '../utils/skin-thumbnail'

export const SkinImage = ({
  skin,
  src,
  urls,
  alt = '',
  className = '',
  fallbackClassName = 'skin-image-fallback',
}) => {
  const resolvedUrls = useMemo(() => {
    if (urls?.length) return urls
    if (src) return [src]
    if (skin) return getSkinThumbnailUrls(skin)
    return []
  }, [skin, src, urls])

  const [urlIndex, setUrlIndex] = useState(0)

  useEffect(() => {
    setUrlIndex(0)
  }, [resolvedUrls.join('|')])

  const currentUrl = resolvedUrls[urlIndex]
  const exhausted = urlIndex >= resolvedUrls.length

  if (exhausted || !currentUrl) {
    return (
      <div
        className={`${fallbackClassName} ${className}`.trim()}
        role="img"
        aria-label={alt || 'Imagem indisponível'}
      >
        {alt ? alt.slice(0, 24) : '—'}
      </div>
    )
  }

  return (
    <img
      key={currentUrl}
      className={className}
      src={currentUrl}
      alt={alt}
      onError={() => setUrlIndex((prev) => prev + 1)}
    />
  )
}
