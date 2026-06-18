import { Searchbar, FilterChips } from './index'

export const FilterGroup = () => {
  return (
    <div className="filter-group">
      <div className="filter-group-row">
        <Searchbar />
      </div>
      <FilterChips />
    </div>
  )
}
