import { UserType } from "./user";

export interface MatchType {
    winner: UserType;
    loser: UserType;
    date: Date;
    matchType?: number;
    matchResult?: number;
}