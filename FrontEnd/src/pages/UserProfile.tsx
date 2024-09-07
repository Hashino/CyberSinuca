import BasicLayout from '../layout/BasicLayout';
import ProfileCard from '../components/cards/ProfileCard';
import { useUsercontext } from '../context/userContext';

const UserProfile: React.FC = () => {
  const { user } = useUsercontext();
  return (
    <BasicLayout authenticated={false}>
      <ProfileCard user={user} />
    </BasicLayout>
  );
};

export default UserProfile;
