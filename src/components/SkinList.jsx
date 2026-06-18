import { useEffect, useMemo, useState } from "react";
import { SkinCard } from "./SkinCard";
import { Pagination } from "./Pagination";
import { useFilterContext } from "../contexts/FilterContext";

const ITEMS_PER_PAGE = 12;

export const SkinList = () => {
  const { filteredSkins, search } = useFilterContext();
  const [currentPage, setCurrentPage] = useState(1);

  const totalPages = Math.max(
    1,
    Math.ceil(filteredSkins.length / ITEMS_PER_PAGE),
  );

 
  useEffect(() => {
    setCurrentPage(1);
  }, [search, filteredSkins.length]);

  const paginatedSkins = useMemo(() => {
    const start = (currentPage - 1) * ITEMS_PER_PAGE;
    return filteredSkins.slice(start, start + ITEMS_PER_PAGE);
  }, [filteredSkins, currentPage]);

  const handlePageChange = (page) => {
    if (page < 1 || page > totalPages) return;
    setCurrentPage(page);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  if (filteredSkins.length === 0) {
    return (
      <p className="skin-list-empty">
        Nenhuma skin encontrada{search ? ` para "${search}"` : ""}.
      </p>
    );
  }

  return (
    <div className="skin-list-wrapper">
      <p className="skin-list-count">
        {filteredSkins.length}{" "}
        {filteredSkins.length === 1 ? "skin encontrada" : "skins encontradas"}
      </p>

      <div className="skin-list">
        {paginatedSkins.map((skin) => (
          <SkinCard key={skin.uuid} skin={skin} />
        ))}
      </div>

      <Pagination
        currentPage={currentPage}
        totalPages={totalPages}
        onPageChange={handlePageChange}
      />
    </div>
  );
};