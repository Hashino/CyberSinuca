import BasicLayout from '../layout/BasicLayout';

const UserProfile: React.FC = () => {
  return (
    <BasicLayout authenticated={false}>
      <h1>PERFIL</h1>
    </BasicLayout>
  );
};

export default UserProfile;
