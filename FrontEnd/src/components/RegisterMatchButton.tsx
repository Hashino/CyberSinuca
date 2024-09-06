import { Plus } from 'lucide-react';

interface RegisterMatchButtonProps {
  handleClick: () => void;
}

const RegisterMatchButton: React.FC<RegisterMatchButtonProps> = ({ handleClick }) => {
  return (
    <button onClick={handleClick}>
      <div className="flex items-center justify-center gap-1 rounded-sm bg-gray-1 px-8 py-4 font-bold text-dark-blue shadow-md dark:bg-dark-3 dark:text-light">
        <span>Registrar Partida</span>
        <Plus size="20" />
      </div>
    </button>
  );
};

export default RegisterMatchButton;
