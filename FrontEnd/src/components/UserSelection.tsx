import {
  Combobox,
  ComboboxButton,
  ComboboxInput,
  ComboboxOption,
  ComboboxOptions,
} from '@headlessui/react';
import { Check, ChevronDown, Search } from 'lucide-react';
import { useState } from 'react';
import { UserType } from '../types/user';

interface ComboboxProps {
  options: UserType[] | undefined;
  selectedUser: UserType | null;
  setSelectedUser: (user: UserType) => void;
  setSelectedWinner: (user: UserType | null) => void;
}

const UserSelection: React.FC<ComboboxProps> = ({
  options,
  selectedUser,
  setSelectedUser,
  setSelectedWinner,
}) => {
  const changePlayer = (user: UserType) => {
    setSelectedUser(user);
    setSelectedWinner(null);
  };
  const [query, setQuery] = useState<string>('');
  const filteredOptions =
    query === ''
      ? options
      : options?.filter((search) => {
          return search.username.toLocaleLowerCase().includes(query.toLocaleLowerCase());
        });

  return (
    <Combobox value={selectedUser} onChange={changePlayer} onClose={() => setQuery('')}>
      <div className="group relative text-dark-3 transition dark:text-light">
        <div className="group flex w-full items-center gap-1 rounded-md bg-light px-2 text-gray-3 outline-[1.5px] outline-pink focus-within:outline dark:bg-dark-3 dark:text-light">
          <Search size={20} />
          <ComboboxInput
            aria-label="Assignee"
            displayValue={(search: UserType) => search?.username}
            onChange={(event) => setQuery(event.target.value)}
            className="h-full w-full rounded border-none bg-light p-2 text-sm font-semibold focus:outline-0 dark:bg-dark-3"
          />
        </div>

        <ComboboxButton className="absolute inset-y-0 right-0 px-2 transition hover:text-light-blue group-focus-within:text-light-blue hover:dark:text-pink dark:group-focus-within:text-pink">
          <ChevronDown size={16} />
        </ComboboxButton>

        <ComboboxOptions className="absolute left-0 z-50 mt-1 max-h-40 w-full overflow-y-auto rounded-md bg-light py-2 shadow-lg dark:bg-dark-3 dark:text-gray-1">
          {filteredOptions?.map((search) => (
            <ComboboxOption key={search.id} value={search} className="group">
              <div className="flex items-center px-1">
                <div className="flex h-full w-full items-center gap-2 rounded-md px-2 py-2 transition hover:cursor-pointer hover:bg-gray-1 hover:dark:bg-dark-1">
                  <Check size={16} className="invisible group-data-[selected]:visible" />
                  <span className="h-6 w-6 overflow-hidden rounded-sm bg-gray-2">
                    <img src={search.imgUrl} alt="userPicture" className="object-cover" />
                  </span>
                  <span className="text-sm font-light group-data-[selected]:font-semibold group-data-[selected]:text-dark-3 dark:group-data-[selected]:text-light">
                    {search.username}
                  </span>
                </div>
              </div>
            </ComboboxOption>
          ))}
        </ComboboxOptions>
      </div>
    </Combobox>
  );
};

export default UserSelection;