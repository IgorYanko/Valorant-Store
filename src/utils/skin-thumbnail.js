export function getSkinThumbnailUrls(skin) {
  const urls = []
  const seen = new Set()

  const add = (url) => {
    if (url && !seen.has(url)) {
      seen.add(url)
      urls.push(url)
    }
  }

  add(skin?.displayIcon)

  const firstChroma = skin?.chromas?.[0]
  add(firstChroma?.displayIcon)
  add(firstChroma?.fullRender)
  add(firstChroma?.swatch)

  return urls
}

export function getSkinThumbnailUrl(skin) {
  return getSkinThumbnailUrls(skin)[0] ?? null
}
