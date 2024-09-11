import { useState } from 'react';
import HistoryCard from '../components/cards/HistoryCard';
import RankingCard from '../components/cards/RankingCard';
import RegisterMatchButton from '../components/RegisterMatchButton';
import RegisterMatchModal from '../components/RegisterMatchModal';
import { useUsercontext } from '../context/userContext';
import BasicLayout from '../layout/BasicLayout';

const Home: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const userContext = useUsercontext();
  const { user } = userContext;

  return (
    <BasicLayout>
      <div className="flex h-full flex-wrap items-center justify-center gap-4">
        <div className="flex w-full flex-wrap justify-center gap-4 py-4">
          <RankingCard />
          <HistoryCard />

          <RegisterMatchModal
            onClose={() => {
              setModalOpen(false);
            }}
            isOpen={isModalOpen}
          />
        </div>

        <div className="pb-4">
          <RegisterMatchButton handleClick={() => setModalOpen(true)} />
        </div>
      </div>
    </BasicLayout>
  );
};

export default Home;
