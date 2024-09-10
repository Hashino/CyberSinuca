import { UserType } from '../../types/user';
import { testMatch } from '../../types/match';
import ProfileCardContent from './ProfileCardContent';

interface ProfileCardProps {
  user: UserType | null;
}

const ProfileCard: React.FC<ProfileCardProps> = ({ user }) => {
  return (
    user && (
      <div className="w-full px-4 pt-2">
        <div className="flex h-fit w-full flex-col rounded-lg bg-gray-1 px-4 py-6 dark:bg-dark-2">
          <div className="flex h-full">
            <div className="ronded-sm flex h-40 w-40 flex-none items-center justify-center overflow-hidden rounded-md bg-gray-2 max-md:h-32 max-md:w-32 max-sm:h-24 max-sm:w-24">
              <img className="h-full w-full object-cover" src={user.imgUrl}></img>
            </div>

            <div className="flex h-40 w-full flex-col justify-between px-8 py-1">
              <div className="">
                <h1 className="text-2xl font-extrabold text-dark-3 dark:text-light max-md:text-lg max-sm:text-base">
                  {user.username}
                </h1>
                <h2 className="pt-2 text-lg font-extralight text-dark-2 dark:text-gray-1 max-md:text-sm">
                  {user.name}
                </h2>
              </div>
              <div className="max-md:hidden">
                <ProfileCardContent user={user} lastMatch={testMatch} />
              </div>
            </div>
          </div>
          <div className="px-2 sm:px-8 md:hidden">
            <ProfileCardContent user={user} lastMatch={testMatch} />
          </div>
        </div>
      </div>
    )
  );
};

export default ProfileCard;
