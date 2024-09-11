import BasicLayout from '../layout/BasicLayout';
import ProfileCard from '../components/cards/ProfileCard';
import { useUsercontext } from '../context/userContext';
import ProfileHistoryCard from '../components/cards/ProfileHistoryCard';
import { testMatch } from '../types/match';

const matches = [testMatch, testMatch, testMatch, testMatch];

const UserProfile: React.FC = () => {
  const { user } = useUsercontext();
  return (
    <BasicLayout>
      <ProfileCard user={user} />
      <ProfileHistoryCard owner={user} matches={matches} />
    </BasicLayout>
  );
};

export default UserProfile;
