import { Dialog } from '@headlessui/react';
import { X } from 'lucide-react';
import { useState } from 'react';
import { useUsercontext } from '../context/userContext';
import { MatchType } from '../types/match';
import { UserType } from '../types/user';
import MatchInfoSelection from './MatchinfoSelection';
import MatchResultSelection from './MatchResultSelection';
import UserSelection from './UserSelection';
import WinnerSelection from './WinnerSelection';

interface ModalProps {
  isOpen: boolean;
  options: UserType[];
  onClose: () => void;
}

interface SubmitProps {
  selectedWinner: UserType | null;
  selectedUser: UserType | null;
  matchType: number | null;
  matchResult: number | null;
}

const RegisterMatchModal: React.FC<ModalProps> = ({ isOpen, options, onClose }) => {
  const [selectedUser, setSelectedUser] = useState<UserType | null>(null);
  const [selectedWinner, setSelectedWinner] = useState<UserType | null>(null);
  const [matchType, setMatchType] = useState<number | null>(null);
  const [matchResult, setMatchResult] = useState<number | null>(1);
  const { user } = useUsercontext();

  function handleSubmit({ selectedWinner, selectedUser, matchType, matchResult }: SubmitProps) {
    if (user && selectedWinner && selectedUser && matchType !== null && matchResult !== null) {
      console.log('submit');
      const newMatch: MatchType = {
        winner: selectedWinner,
        loser: selectedWinner === selectedUser ? user : selectedUser,
        date: new Date(),
        matchType: matchType,
        matchResult: matchResult,
      };
      console.log(newMatch);
      onClose();
    }
  }

  return (
    <Dialog
      open={isOpen}
      onClose={onClose}
      className="fixed inset-0 z-30 flex items-center justify-center backdrop-blur-sm backdrop-brightness-50"
    >
      <div className="m-2s relative flex w-full max-w-sm flex-col items-center justify-center rounded-md bg-gray-1 opacity-100 shadow-md dark:bg-dark-2">
        <button
          onClick={onClose}
          className="absolute right-1 top-1 text-dark-1 transition hover:text-dark-3 dark:text-gray-1 hover:dark:text-light"
        >
          <X size={24} />
        </button>
        <div className="flex w-full flex-col gap-4 px-6 py-5">
          <h3 className="text-lg font-semibold text-dark-3 dark:text-light">Registrar Partida</h3>
          <div className="flex flex-col gap-1 text-sm text-gray-3 dark:text-gray-1">
            <span>Selecione o Oponente:</span>
            <UserSelection
              options={options}
              selectedUser={selectedUser}
              setSelectedUser={setSelectedUser}
            />
          </div>

          {selectedUser && user && (
            <div className="flex flex-col gap-1 text-sm text-gray-3 dark:text-gray-1">
              <span>Selecione o Vencedor:</span>
              <WinnerSelection
                currentUser={user}
                selectedUser={selectedUser}
                selectedWinner={selectedWinner}
                setSelectedWinner={setSelectedWinner}
              />
            </div>
          )}

          {selectedUser && selectedWinner && (
            <div className="flex flex-col gap-1 text-sm text-gray-3 dark:text-gray-1">
              <span>Tipo de Partida:</span>
              <MatchInfoSelection matchType={matchType} setMatchType={setMatchType} />
            </div>
          )}

          {selectedUser && selectedWinner && matchType && (
            <div className="flex flex-col gap-1 text-sm text-gray-3 dark:text-gray-1">
              <span>Resultado:</span>
              <MatchResultSelection
                matchType={matchType}
                matchResult={matchResult}
                setMatchResult={setMatchResult}
              />
            </div>
          )}
          <div className="flex w-full items-center">
            <button
              onClick={() => handleSubmit({ selectedWinner, selectedUser, matchType, matchResult })}
              className="rounded-md px-4 py-2 text-sm font-semibold hover:brightness-90 dark:bg-dark-3 dark:text-light"
            >
              Enviar
            </button>
          </div>
        </div>
      </div>
    </Dialog>
  );
};

export default RegisterMatchModal;
