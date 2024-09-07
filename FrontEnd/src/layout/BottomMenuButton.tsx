import { Link } from 'react-router-dom';
import { ForwardRefExoticComponent } from 'react';

interface IconProps {
  size?: number | string;
}

interface Props {
  Icon: ForwardRefExoticComponent<IconProps>;
  path: string;
}

const BottomMenuButton: React.FC<Props> = ({ Icon, path }) => {
  return (
    <Link to={path}>
      <div className="flex items-center py-4 text-dark-1 hover:text-pink active:text-pink dark:text-gray-1 dark:hover:text-light-blue dark:active:text-light-blue">
        <Icon size={24} />
      </div>
    </Link>
  );
};

export default BottomMenuButton;
