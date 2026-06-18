import { getSkinRarity } from './price-calculator'
import { getSkinWeapon } from './skin-weapon'

const SKIN_NAME_EXCLUDED_TERMS = ['standard', 'random']

export const RARITY_TYPES = ['Select', 'Deluxe', 'Premium', 'Exclusive', 'Ultra']

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

export function filterSkinsByWeapons(skins, weapons, weaponNames = []) {
  if (!weapons?.length) return skins
  const weaponSet = new Set(weapons)
  return skins.filter((skin) => {
    const weapon = getSkinWeapon(skin.displayName, weaponNames)
    return weapon && weaponSet.has(weapon)
  })
}

export function filterSkinsByRarities(skins, rarities) {
  if (!rarities?.length) return skins
  const raritySet = new Set(rarities)
  return skins.filter((skin) => {
    const rarity = getSkinRarity(skin.contentTierUuid)
    return raritySet.has(rarity)
  })
}

export function applySkinFilters(skins, { search, weapons, rarities, weaponNames }) {
  let result = skins
  result = filterSkinsByName(result, search)
  result = filterSkinsByWeapons(result, weapons, weaponNames)
  result = filterSkinsByRarities(result, rarities)
  return result
}
