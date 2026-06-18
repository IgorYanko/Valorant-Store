import { useFilterContext } from '../contexts/FilterContext'
import { RARITY_TYPES } from '../utils/skin-filters'

function FilterChipGroup({ label, options, selected, onToggle, scrollable = false }) {
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
      />
    </>
  )
}
