import { createContext, useContext, useMemo, useState } from "react";
import { useSkinsContext } from "./SkinsContext";
import { filterSkinsByName } from "../utils/skin-filters";

const FilterContext = createContext(null);

export const FilterProvider = ({ children }) => {
  const { skins } = useSkinsContext();
  const [search, setSearch] = useState("");

  const filteredSkins = useMemo(
    () => filterSkinsByName(skins, search),
    [skins, search],
  );

  return (
    <FilterContext.Provider value={{ search, setSearch, filteredSkins }}>
      {children}
    </FilterContext.Provider>
  );
};

export const useFilterContext = () => {
  const context = useContext(FilterContext);
  if (!context) {
    throw new Error("useFilterContext must be used within a FilterProvider");
  }
  return context;
};
