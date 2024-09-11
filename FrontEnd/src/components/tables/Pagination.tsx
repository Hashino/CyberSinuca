import { useSearchParams } from 'react-router-dom';
import { ChevronsLeft, ChevronLeft, ChevronRight, ChevronsRight } from 'lucide-react';

interface PaginationProps {
  page: number;
  items: number;
  pages: number;
}

const Pagination: React.FC<PaginationProps> = ({ page, items, pages }) => {
  const [, setSearchParams] = useSearchParams();

  function firstPage() {
    setSearchParams((params) => {
      params.set('_page', '1');
      return params;
    });
  }

  function prevPage() {
    if (page == 1) {
      return;
    }

    setSearchParams((params) => {
      params.set('_page', (page - 1).toString());
      return params;
    });
  }

  function nextPage() {
    if (page == pages) {
      return;
    }

    setSearchParams((params) => {
      params.set('_page', (page + 1).toString());
      return params;
    });
  }

  function lastPage() {
    setSearchParams((params) => {
      params.set('_page', pages.toString());
      return params;
    });
  }

  return (
    <div className="flex items-center justify-center gap-4">
      <span className="text-xs font-thin text-gray-2">
        Página {page} de {pages}
      </span>

      <div className="flex gap-1">
        <button onClick={firstPage}>
          <div className="flex h-6 w-6 items-center justify-center rounded-md border-pink bg-light text-dark-1 shadow-md hover:border dark:bg-dark-3 dark:text-gray-1">
            <ChevronsLeft size={20} />
          </div>
        </button>
        <button onClick={prevPage}>
          <div className="flex h-6 w-6 items-center justify-center rounded-md border-pink bg-light text-dark-1 shadow-md hover:border dark:bg-dark-3 dark:text-gray-1">
            <ChevronLeft size={20} />
          </div>
        </button>
        <button onClick={nextPage}>
          <div className="flex h-6 w-6 items-center justify-center rounded-md border-pink bg-light text-dark-1 shadow-md hover:border dark:bg-dark-3 dark:text-gray-1">
            <ChevronRight size={20} />
          </div>
        </button>
        <button onClick={lastPage}>
          <div className="flex h-6 w-6 items-center justify-center rounded-md border-pink bg-light text-dark-1 shadow-md hover:border dark:bg-dark-3 dark:text-gray-1">
            <ChevronsRight size={20} />
          </div>
        </button>
      </div>
    </div>
  );
};

export default Pagination;
