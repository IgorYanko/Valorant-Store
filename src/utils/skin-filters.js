const SKIN_NAME_EXCLUDED_TERMS = ['standard', 'random']

export function isExcludedSkin(skin) {
  const name = skin.displayName?.toLowerCase() ?? ''
  return SKIN_NAME_EXCLUDED_TERMS.some((term) => name.includes(term))
}

export function filterSkins(skins) {
  return skins.filter((skin) => !isExcludedSkin(skin))
}

export function filterSkinsByName(skins, query) {
  const term = query.trim().toLowerCase()
  if (!term) return skins
  return skins.filter((skin) =>
    skin.displayName?.toLowerCase().includes(term),
  )
}
