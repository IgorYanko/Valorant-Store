import { Search, X } from "lucide-react";
import { useFilterContext } from "../contexts/FilterContext";

export const Searchbar = () => {
  const { search, setSearch } = useFilterContext();

  return (
    <div className="searchbar-wrapper">
      <Search className="searchbar-icon" size={18} />
      <input
        className="searchbar"
        type="text"
        placeholder="Pesquisar skins..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
      />
      {search && (
        <button
          type="button"
          className="searchbar-clear"
          aria-label="Limpar busca"
          onClick={() => setSearch("")}
        >
          <X size={16} />
        </button>
      )}
    </div>
  );
};
