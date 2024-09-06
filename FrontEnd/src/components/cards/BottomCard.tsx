import { ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
interface BottomCardProps {
  path: string;
}
const cards: React.FC<BottomCardProps> = ({ path }) => {
  return (
    <Link to={path}>
      <div className="flex h-4 w-full items-center justify-center gap-1 rounded-b-md bg-gray-3 py-4 text-gray-1 transition hover:bg-dark-2 hover:text-light dark:bg-dark-3 dark:text-gray-3 hover:dark:text-light">
        <span className="text-xs">Ver Mais</span>
        <ChevronRight size={12} />
      </div>
    </Link>
  );
};

export default cards;
