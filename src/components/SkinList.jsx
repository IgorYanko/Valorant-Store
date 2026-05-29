import { SkinCard } from "./SkinCard";
import { useSkinsContext } from "../contexts/SkinsContext";

export const SkinList = () => {
  const { skins } = useSkinsContext();

  return (
    <div className="skin-list">
      {skins.map((skin) => (
        <SkinCard key={skin.uuid} skin={skin} />
      ))}
    </div>
  );
};
