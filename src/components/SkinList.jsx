import { SkinCard } from "./SkinCard";
import { useFilterContext } from "../contexts/FilterContext";

export const SkinList = () => {
  const { filteredSkins, search } = useFilterContext();

  if (filteredSkins.length === 0) {
    return (
      <p className="skin-list-empty">
        Nenhuma skin encontrada{search ? ` para "${search}"` : ""}.
      </p>
    );
  }

  return (
    <div className="skin-list">
      {filteredSkins.map((skin) => (
        <SkinCard key={skin.uuid} skin={skin} />
      ))}
    </div>
  );
};
