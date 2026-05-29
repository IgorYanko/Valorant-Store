import { useState } from 'react'

export const Searchbar = () => {
  const [search, setSearch] = useState('')
  const [results, setResults] = useState([])

  const handleSearch = (e) => {
    setSearch(e.target.value)
  }

  return (
    <div className="">
      <input className="searchbar" type="text" placeholder="Search" value={search} onChange={handleSearch} />
    </div>
  )
}