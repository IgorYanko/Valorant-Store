import { useState } from 'react'

export const FilterDropdown = () => {
  const [filter, setFilter] = useState('all')

  const handleFilterChange = (e) => {
    setFilter(e.target.value)
  }

  return (
    <div className="filter-dropdown">
      <select className="filter-dropdown-select" onChange={handleFilterChange} value={filter}>
        <option value="all">All</option>
      </select>
    </div>
  )
}