import { UserType, testUser } from './user';

export interface MatchType {
  winner: UserType;
  loser: UserType;
  date: string;
  matchType?: number;
  matchResult?: number;
}

export const testMatch: MatchType = {
  winner: testUser,
  loser: testUser,
  date: new Date().toDateString(),
  matchType: 1,
  matchResult: 0,
};
