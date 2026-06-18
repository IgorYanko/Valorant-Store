import { useFilterContext } from '../contexts/FilterContext'
import { RARITY_TYPES } from '../utils/skin-filters'

const RARITY_DOT = {
  Select: 'var(--r-select)',
  Deluxe: 'var(--r-deluxe)',
  Premium: 'var(--r-premium)',
  Exclusive: 'var(--r-exclusive)',
  Ultra: 'var(--r-ultra)',
}

function FilterChipGroup({ label, options, selected, onToggle, scrollable = false, dots = false }) {
  return (
    <div className={`filter-chips${scrollable ? ' filter-chips--scroll' : ''}`}>
      <span className="filter-chips-label">{label}</span>
      {options.map((option) => (
        <button
          key={option}
          type="button"
          className={`filter-chip${selected.includes(option) ? ' active' : ''}`}
          aria-pressed={selected.includes(option)}
          onClick={() => onToggle(option)}
        >
          {dots && (
            <span
              className="filter-chip-dot"
              style={{ '--dot': RARITY_DOT[option] }}
            />
          )}
          {option}
        </button>
      ))}
    </div>
  )
}

export const FilterChips = () => {
  const {
    selectedWeapons,
    toggleWeapon,
    selectedRarities,
    toggleRarity,
    weaponNames,
  } = useFilterContext()

  return (
    <>
      <FilterChipGroup
        label="Arma"
        options={weaponNames}
        selected={selectedWeapons}
        onToggle={toggleWeapon}
        scrollable
      />
      <FilterChipGroup
        label="Raridade"
        options={RARITY_TYPES}
        selected={selectedRarities}
        onToggle={toggleRarity}
        dots
      />
    </>
  )
}
