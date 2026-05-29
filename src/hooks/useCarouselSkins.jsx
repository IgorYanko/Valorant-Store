import { useState, useEffect } from "react";
import { useSkinsContext } from "../contexts/SkinsContext";

const STORAGE_KEY = "valorant-carousel-skin-ids";
const CAROUSEL_COUNT = 5;

function pickRandomSkins(skins, count) {
  const shuffled = [...skins].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
}

export const useCarouselSkins = () => {
  const { skins, loading: skinsLoading, error } = useSkinsContext();
  const [carouselSkins, setCarouselSkins] = useState([]);
  const [ready, setReady] = useState(false);

  useEffect(() => {
    if (skinsLoading || skins.length === 0) {
      setReady(false);
      return;
    }

    const savedIds = JSON.parse(localStorage.getItem(STORAGE_KEY) ?? "null");

    if (savedIds?.length) {
      const cached = savedIds
        .map((id) => skins.find((s) => s.uuid === id))
        .filter(Boolean);

      if (cached.length === savedIds.length) {
        setCarouselSkins(cached);
        setReady(true);
        return;
      }
    }

    const selected = pickRandomSkins(skins, CAROUSEL_COUNT);
    localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify(selected.map((s) => s.uuid)),
    );
    setCarouselSkins(selected);
    setReady(true);
  }, [skins, skinsLoading]);

  return {
    carouselSkins,
    loading: skinsLoading || !ready,
    error,
  };
};
