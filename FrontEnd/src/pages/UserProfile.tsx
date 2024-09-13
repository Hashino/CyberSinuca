import BasicLayout from '../layout/BasicLayout';
import ProfileCard from '../components/cards/ProfileCard';
import ProfileHistoryCard from '../components/cards/ProfileHistoryCard';
import { testMatch } from '../types/match';
import { useParams } from 'react-router-dom';
import { UserType } from '../types/user';
import { useQuery } from '@tanstack/react-query';

const matches = [testMatch, testMatch, testMatch, testMatch];

const UserProfile: React.FC = () => {
  const { id } = useParams();

  const { data: userResponse, isLoading } = useQuery<UserType>({
    queryKey: ['user', id],
    queryFn: async () => {
      const response = await fetch(`http://localhost:8888/users/${id}`);
      const data = await response.json();
      return data;
    },
  });

  if (isLoading) {
    return null; //return <LoadingProfile />;
  }

  return (
    <BasicLayout>
      <ProfileCard user={userResponse} />
      <ProfileHistoryCard owner={userResponse} matches={matches} />
    </BasicLayout>
  );
};

export default UserProfile;
