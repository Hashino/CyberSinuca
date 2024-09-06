import { Link } from 'react-router-dom';
const ErrorPage: React.FC = () => {
  return (
    <div className="flex h-screen items-center justify-center bg-gray-1 dark:bg-dark-1">
      <div className="flex flex-col items-center gap-4">
        <h1 className="text-gray-3 dark:text-gray-1">
          404 - Página não encontrada
        </h1>
        <Link to="/">
          <span className="hover rounded-md border border-gray-3 bg-gray-1 px-4 py-2 text-gray-3 transition hover:border-dark-1 hover:bg-gray-3 hover:text-light">
            Voltar
          </span>
        </Link>
      </div>
    </div>
  );
};

export default ErrorPage;
