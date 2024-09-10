import { UserType, testUser, Options } from "./user";

export interface MatchType {
    winner: UserType;
    loser: UserType;
    date: Date;
    matchType?: number;
    matchResult?: number;
};

export const testMatch: MatchType = {
    winner: testUser,
    loser: Options[0],
    date: new Date(),
    matchType: 1,
    matchResult: 0,
  };