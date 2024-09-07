import { useState } from 'react';
import HistoryCard from '../components/cards/HistoryCard';
import RankingCard from '../components/cards/RankingCard';
import RegisterMatchButton from '../components/RegisterMatchButton';
import RegisterMatchModal from '../components/RegisterMatchModal';
import { useUsercontext } from '../context/userContext';
import BasicLayout from '../layout/BasicLayout';
import { MatchType } from '../types/match';
import { UserType, testUser } from '../types/user';

const Options: UserType[] = [
  {
    id: 1,
    username: 'Natan',
    defeats: 4,
    victories: 6,
    rating: 960,
    name: 'Algum Nome',
    imgUrl: '/images/profilePicSample2.png',
  },
  {
    id: 2,
    username: 'Iam',
    defeats: 4,
    victories: 6,
    rating: 960,
    name: 'Algum Nome',
    imgUrl: '/images/profilePicSample2.png',
  },
  {
    id: 3,
    username: 'Samuel',
    defeats: 4,
    victories: 6,
    rating: 960,
    name: 'Algum Nome',
    imgUrl: '/images/profilePicSample2.png',
  },
  {
    id: 4,
    username: 'Gabriel',
    defeats: 4,
    victories: 6,
    rating: 960,
    name: 'Algum Nome',
    imgUrl: '/images/profilePicSample2.png',
  },
];

const testMatch: MatchType = {
  winner: testUser,
  loser: Options[0],
  date: new Date(),
  matchType: 1,
  matchResult: 1,
};

const Home: React.FC = () => {
  const [isModalOpen, setModalOpen] = useState(false);
  const userContext = useUsercontext();
  const { user } = userContext;

  const testMatches: MatchType[] = [testMatch, testMatch, testMatch];
  const testUsers: UserType[] = [];
  if (user) {
    testUsers.push(user);
    testUsers.push(user);
    testUsers.push(user);
  }

  return (
    <BasicLayout authenticated={true}>
      <div className="flex h-full flex-wrap items-center justify-center gap-4">
        <div className="flex w-full flex-wrap justify-center gap-4 py-4">
          <RankingCard users={testUsers} />
          <HistoryCard matches={testMatches} />

          <RegisterMatchModal
            options={Options}
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
