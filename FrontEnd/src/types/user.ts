export interface UserType {
    id: number;
    name: string;
    email?: string;
    rating?: number;
    victories?: number;
    defeats?: number;
    imgUrl?: string;
}