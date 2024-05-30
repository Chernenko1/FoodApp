interface Recipe {
  _id: string;
  name: string;
  description: string;
  cookTime: number;
  weight: number;
  image: string;
  service: number;
  ingredients: {
    id: {
      name: string;
      id: string;
    };
    weight: string;
  }[];
  instruction: string[];
  category: {id: string; name: string}[];
  rating: {
    markCount: number;
    usersCount: number;
  };
  isFavourite: boolean;
  nutrients: Nutrients;
  vitamins: Vitamins;
  minerals: Minerals;
}
