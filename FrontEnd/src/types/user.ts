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

  export const Options: UserType[] = [
    {
      id: 1,
      username: 'Natan',
      defeats: 4,
      victories: 6,
      rating: 960,
      name: 'Algum Nome',
      imgUrl: '/images/profilePicSample2.png',
    },
    {
      id: 2,
      username: 'Iam',
      defeats: 4,
      victories: 6,
      rating: 960,
      name: 'Algum Nome',
      imgUrl: '/images/profilePicSample2.png',
    },
    {
      id: 3,
      username: 'Samuel',
      defeats: 4,
      victories: 6,
      rating: 960,
      name: 'Algum Nome',
      imgUrl: '/images/profilePicSample2.png',
    },
    {
      id: 4,
      username: 'Gabriel',
      defeats: 4,
      victories: 6,
      rating: 960,
      name: 'Algum Nome',
      imgUrl: '/images/profilePicSample2.png',
    },
  ];