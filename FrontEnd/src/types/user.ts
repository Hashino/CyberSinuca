export interface UserType {
    id: number;
    username: string;
    name?: string;
    email?: string;
    rating: number;
    victories: number;
    defeats: number;
    imgUrl?: string;
    position ?: number;
}

export const testUser: UserType = {
    id: 5,
    username: 'natandsj',
    imgUrl: '/images/profilePicSample.jpg',
    rating: 950,
    defeats: 2,
    victories: 3,
    name: "Natanael dos Santos Júnior",
  };

