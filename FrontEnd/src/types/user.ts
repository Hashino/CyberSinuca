export interface UserType {
    id: number;
    username: string;
    name?: string;
    email?: string;
    rating?: number;
    victories?: number;
    defeats?: number;
    imgUrl?: string;
}