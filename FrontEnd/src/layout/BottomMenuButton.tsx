import { Link } from 'react-router-dom';
interface Props {
  Icon: React.FC<{ size: number }>;
  path: string;
}

const BottomMenuButton: React.FC<Props> = (props: Props) => {
  return (
    <Link to={props.path}>
      <div className="flex items-center py-4 text-dark-1 hover:text-pink active:text-pink dark:text-gray-1 dark:hover:text-light-blue dark:active:text-light-blue">
        <props.Icon size={24} />
      </div>
    </Link>
  );
};

export default BottomMenuButton;
