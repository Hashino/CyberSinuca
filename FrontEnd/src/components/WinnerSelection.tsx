import { Radio, RadioGroup } from '@headlessui/react';
import { Check } from 'lucide-react';
import { UserType } from '../types/user';

interface WinnerSelectionProps {
  currentUser: UserType;
  selectedUser: UserType | null;
  selectedWinner: UserType | null;
  setSelectedWinner: (user: UserType) => void;
  setMatchType: (matchType: number | null) => void;
}

const WinnerSelection: React.FC<WinnerSelectionProps> = ({
  currentUser,
  selectedUser,
  selectedWinner,
  setSelectedWinner,
  setMatchType,
}) => {
  const changeWinner = (user: UserType) => {
    setSelectedWinner(user);
    setMatchType(null);
  };
  const users: UserType[] = [currentUser, selectedUser].filter(
    (user) => user !== null
  ) as UserType[];

  return (
    <div className="w-full">
      <RadioGroup value={selectedWinner} onChange={changeWinner} aria-label="Winner">
        {users.map(
          (user) =>
            user && (
              <Radio
                value={user}
                key={user.id}
                className="group relative flex w-full items-center pb-2"
              >
                <div className="flex w-full items-center justify-between rounded-md bg-light p-2 shadow-sm transition hover:cursor-pointer hover:brightness-90 group-data-[checked]:border group-data-[checked]:border-light-blue dark:bg-dark-3 dark:hover:bg-dark-2 dark:group-data-[checked]:border-pink">
                  <div className="flex items-center gap-2 font-semibold text-gray-3 group-data-[checked]:text-dark-3 dark:text-gray-1 dark:group-data-[checked]:text-light">
                    <span className="h-8 w-8 overflow-hidden rounded-md bg-gray-2">
                      {user.imgUrl && (
                        <img className="h-full w-full object-cover" src={user.imgUrl}></img>
                      )}
                    </span>
                    <span>{user.username}</span>
                  </div>
                  <div className="invisible text-light-blue group-data-[checked]:visible dark:text-pink">
                    <Check size={16} />
                  </div>
                </div>
              </Radio>
            )
        )}
      </RadioGroup>
    </div>
  );
};

export default WinnerSelection;
