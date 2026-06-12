import { useFilterContext } from "../contexts/FilterContext";

export const Searchbar = () => {
  const { search, setSearch } = useFilterContext();

  return (
    <div className="searchbar-wrapper">
      <input
        className="searchbar"
        type="text"
        placeholder="Search"
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
    </div>
  );
};
