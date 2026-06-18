import { createContext, useCallback, useContext, useMemo, useState } from "react";
import { useSkinsContext } from "./SkinsContext";
import { useWeaponsContext } from "./WeaponsContext";
import { applySkinFilters } from "../utils/skin-filters";
import { getWeaponNames } from "../utils/skin-weapon";

const FilterContext = createContext(null);

function toggleInList(list, value) {
  return list.includes(value)
    ? list.filter((item) => item !== value)
    : [...list, value];
}

export const FilterProvider = ({ children }) => {
  const { skins } = useSkinsContext();
  const { weapons } = useWeaponsContext();
  const [search, setSearch] = useState("");
  const [selectedWeapons, setSelectedWeapons] = useState([]);
  const [selectedRarities, setSelectedRarities] = useState([]);

  const weaponNames = useMemo(() => getWeaponNames(weapons), [weapons]);

  const toggleWeapon = useCallback((weapon) => {
    setSelectedWeapons((prev) => toggleInList(prev, weapon));
  }, []);

  const toggleRarity = useCallback((rarity) => {
    setSelectedRarities((prev) => toggleInList(prev, rarity));
  }, []);

  const filteredSkins = useMemo(
    () =>
      applySkinFilters(skins, {
        search,
        weapons: selectedWeapons,
        rarities: selectedRarities,
        weaponNames,
      }),
    [skins, search, selectedWeapons, selectedRarities, weaponNames],
  );

  return (
    <FilterContext.Provider
      value={{
        search,
        setSearch,
        selectedWeapons,
        setSelectedWeapons,
        toggleWeapon,
        selectedRarities,
        setSelectedRarities,
        toggleRarity,
        weaponNames,
        filteredSkins,
      }}
    >
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
