import { SlidersHorizontal } from 'lucide-react'
import { Searchbar, FilterChips } from '../components'
import { useFilterContext } from '../contexts/FilterContext'

export const FilterGroup = () => {
  const {
    search,
    setSearch,
    selectedWeapons,
    setSelectedWeapons,
    selectedRarities,
    setSelectedRarities,
  } = useFilterContext()

  const hasActiveFilters =
    search.length > 0 ||
    selectedWeapons.length > 0 ||
    selectedRarities.length > 0

  const clearFilters = () => {
    setSearch('')
    setSelectedWeapons([])
    setSelectedRarities([])
  }

  return (
    <section className="filter-bar" aria-label="Filtros de skins">
      <div className="filter-bar-top">
        <Searchbar />
        {hasActiveFilters && (
          <button type="button" className="filter-clear" onClick={clearFilters}>
            <SlidersHorizontal size={15} />
            Limpar filtros
          </button>
        )}
      </div>
      <FilterChips />
    </section>
  )
}
