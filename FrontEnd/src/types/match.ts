import { UserType, testUser } from "./user";

export interface MatchType {
    winner: UserType;
    loser: UserType;
    date: Date;
    matchType?: number;
    matchResult?: number;
};

export const testMatch : MatchType = {
    winner: testUser,
    loser: testUser,
    date: new Date(),
    matchResult: 1,
    matchType: 1,
}