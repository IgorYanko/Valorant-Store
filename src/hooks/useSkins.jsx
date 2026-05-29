import { useState, useEffect } from "react";
import { getSkins } from "../services/getService";

export const useSkins = () => {
  const [skins, setSkins] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    async function loadSkins() {
      try {
        setLoading(true);
        setError(null);
        const data = await getSkins();
        setSkins(data);
      } catch (err) {
        setError(err.message ?? "Erro ao carregar skins");
      } finally {
        setLoading(false);
      }
    }
    loadSkins();
  }, []);

  return { skins, loading, error };
};
