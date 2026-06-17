import { ChevronLeft, ChevronRight } from 'lucide-react'

// Gera a lista de páginas a exibir, com "..." para intervalos longos.
// Ex: total=10, current=5 -> [1, '...', 4, 5, 6, '...', 10]
function getPageNumbers(current, total) {
  const delta = 1
  const pages = []

  for (let page = 1; page <= total; page++) {
    const isEdge = page === 1 || page === total
    const isNearCurrent = page >= current - delta && page <= current + delta

    if (isEdge || isNearCurrent) {
      pages.push(page)
    } else if (pages[pages.length - 1] !== '...') {
      pages.push('...')
    }
  }

  return pages
}

export const Pagination = ({ currentPage, totalPages, onPageChange }) => {
  if (totalPages <= 1) return null

  const pages = getPageNumbers(currentPage, totalPages)

  return (
    <nav className="pagination" aria-label="Paginação de skins">
      <button
        type="button"
        className="pagination-arrow"
        onClick={() => onPageChange(currentPage - 1)}
        disabled={currentPage === 1}
        aria-label="Página anterior"
      >
        <ChevronLeft size={20} />
      </button>

      {pages.map((page, index) =>
        page === '...' ? (
          <span key={`dots-${index}`} className="pagination-dots">
            …
          </span>
        ) : (
          <button
            key={page}
            type="button"
            className={
              page === currentPage ? 'pagination-page active' : 'pagination-page'
            }
            onClick={() => onPageChange(page)}
            aria-current={page === currentPage ? 'page' : undefined}
          >
            {page}
          </button>
        ),
      )}

      <button
        type="button"
        className="pagination-arrow"
        onClick={() => onPageChange(currentPage + 1)}
        disabled={currentPage === totalPages}
        aria-label="Próxima página"
      >
        <ChevronRight size={20} />
      </button>
    </nav>
  )
}