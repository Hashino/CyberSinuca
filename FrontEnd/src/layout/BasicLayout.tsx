import BottomMenu from './BottomMenu';
import MobileHeader from './MobileHeader';
import Sidebar from './Sidebar';

interface LayoutProps {
  children: React.ReactNode;
}

const layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="min-h-screen bg-light transition duration-300 dark:bg-dark-1">
      <div className="flex">
        <Sidebar />
        <div className="flex h-screen max-h-screen w-full flex-col">
          <MobileHeader />
          <div className="relative h-full w-full overflow-y-auto max-sm:mb-14 max-sm:mt-12">
            {children}
          </div>
          <BottomMenu />
        </div>
      </div>
    </div>
  );
};

export default layout;
