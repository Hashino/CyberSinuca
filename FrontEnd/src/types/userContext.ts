import { UserType } from './user';

export interface UserContextProps {
  user: UserType | null;
  login: (userData: UserType) => void;
  logout: () => void;
}
