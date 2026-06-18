const MELEE_KEYWORDS = ['knife', 'dagger', 'sword', 'blade', 'axe', 'baton', 'karambit']

export function getWeaponNames(weapons = []) {
  return weapons.map((weapon) => weapon.displayName).filter(Boolean)
}

export function getSkinWeapon(displayName, weaponNames = []) {
  const name = displayName?.trim() ?? ''
  if (!name) return null

  const lower = name.toLowerCase()
  if (MELEE_KEYWORDS.some((keyword) => lower.includes(keyword))) {
    return 'Melee'
  }

  const weaponsByLength = [...weaponNames].sort((a, b) => b.length - a.length)

  for (const weapon of weaponsByLength) {
    if (weapon === 'Melee') continue
    if (name.endsWith(` ${weapon}`) || name === weapon) {
      return weapon
    }
  }

  return null
}
