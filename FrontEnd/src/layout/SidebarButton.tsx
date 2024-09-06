import { Link } from 'react-router-dom';
interface Props {
  Icon: React.FC<{ size?: number; color?: string }>;
  text: string;
  iconSize: number;
  path: string;
}

const SidebarButton: React.FC<Props> = (props: Props) => {
  return (
    <Link to={props.path}>
      <div className="flex items-center gap-3 px-8 py-3 font-bold text-gray-3 transition hover:cursor-pointer hover:bg-gray-2 hover:text-dark-2 dark:text-gray-1 dark:hover:bg-dark-3 dark:hover:text-light">
        <props.Icon size={props.iconSize} />
        <span className="max-md:hidden">{props.text}</span>
      </div>
    </Link>
  );
};

export default SidebarButton;
