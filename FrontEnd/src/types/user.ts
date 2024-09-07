export interface UserType {
    id: number;
    username: string;
    name?: string;
    email?: string;
    rating: number;
    victories: number;
    defeats: number;
    imgUrl?: string;
}

export const testUser: UserType = {
    id: 5,
    username: 'Junior',
    imgUrl: '/images/profilePicSample.jpg',
    rating: 950,
    email: "natanael0junior@gmail.com",
    defeats: 2,
    victories: 3,
    name: "Natanael dos Santos Júnior",
  };