export function getSkinLevelVideo(skin) {
  const levels = skin?.levels ?? []
  const levelWithVideo = [...levels].reverse().find((level) => level.streamedVideo)
  return levelWithVideo?.streamedVideo ?? null
}

export function getSkinPresentationVideo(skin) {
  return (
    getSkinLevelVideo(skin) ??
    skin?.chromas?.find((chroma) => chroma.streamedVideo)?.streamedVideo ??
    null
  )
}

export function isBaseChroma(chroma, skin) {
  const firstChroma = skin?.chromas?.[0]
  if (!chroma || !firstChroma) return true
  return chroma.uuid === firstChroma.uuid
}

function resolveChroma(chroma, skin) {
  if (!chroma?.uuid || !skin?.chromas) return chroma
  return skin.chromas.find((item) => item.uuid === chroma.uuid) ?? chroma
}

export function getChromaVideoUrl(chroma, skin) {
  if (!skin) return null

  const resolvedChroma = resolveChroma(chroma, skin)

  if (resolvedChroma?.streamedVideo) {
    return resolvedChroma.streamedVideo
  }

  if (isBaseChroma(resolvedChroma, skin)) {
    return getSkinLevelVideo(skin)
  }

  return null
}

export function chromaHasOwnVideo(chroma, skin) {
  return Boolean(resolveChroma(chroma, skin)?.streamedVideo)
}

export function getChromaImageUrl(chroma, skin) {
  return chroma?.fullRender ?? chroma?.displayIcon ?? skin?.displayIcon ?? null
}

export function getChromaImageUrls(chroma, skin) {
  const urls = []
  const seen = new Set()

  const add = (url) => {
    if (url && !seen.has(url)) {
      seen.add(url)
      urls.push(url)
    }
  }

  add(chroma?.fullRender)
  add(chroma?.displayIcon)
  add(skin?.displayIcon)

  const firstChroma = skin?.chromas?.[0]
  if (firstChroma?.uuid !== chroma?.uuid) {
    add(firstChroma?.fullRender)
    add(firstChroma?.displayIcon)
  }

  return urls
}
