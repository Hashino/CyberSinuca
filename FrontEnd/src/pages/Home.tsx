import { useEffect, useState } from 'react';
import HistoryCard from '../components/cards/HistoryCard';
import RankingCard from '../components/cards/RankingCard';
import RegisterMatchButton from '../components/RegisterMatchButton';
import RegisterMatchModal from '../components/RegisterMatchModal';
import { useUsercontext } from '../context/userContext';
import BasicLayout from '../layout/BasicLayout';
import { MatchType } from '../types/match';
import { UserType } from '../types/user';

const Options: UserType[] = [
  { id: 1, name: 'Natan' },
  { id: 2, name: 'Iam' },
  { id: 3, name: 'Samuel' },
  { id: 4, name: 'Gabriel' },
];

const testUser: UserType = {
  id: 5,
  name: 'Junior',
  imgUrl: 'src/assets/ef4d8a41160c4966a88013d6a83664d6.jpg',
  rating: 950,
};

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
  const { login, user } = userContext;

  const testMatches: MatchType[] = [testMatch, testMatch, testMatch];
  const testUsers: UserType[] = [];
  if (user) {
    testUsers.push(user);
    testUsers.push(user);
    testUsers.push(user);
  }

  useEffect(() => {
    if (!user) {
      login(testUser); //fake login for testing
    }
    console.log(user);
  }, []);

  return (
    <BasicLayout authenticated={true}>
      <div className="flex h-full flex-wrap items-center justify-center gap-4">
        <div className="flex w-full flex-wrap items-center justify-center gap-4 py-4">
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
