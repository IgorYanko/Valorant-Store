export function getSkinPresentationVideo(skin) {
  const levels = skin?.levels ?? []
  const levelWithVideo = [...levels].reverse().find((level) => level.streamedVideo)
  if (levelWithVideo) return levelWithVideo.streamedVideo

  const chromas = skin?.chromas ?? []
  const chromaWithVideo = chromas.find((chroma) => chroma.streamedVideo)
  return chromaWithVideo?.streamedVideo ?? null
}

export function getChromaImageUrl(chroma, skin) {
  return chroma?.fullRender ?? chroma?.displayIcon ?? skin?.displayIcon ?? null
}

export function getChromaVideoUrl(chroma, skin) {
  return chroma?.streamedVideo ?? getSkinPresentationVideo(skin)
}
