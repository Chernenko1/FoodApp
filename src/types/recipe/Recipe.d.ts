interface Recipes {
  _id: string;
  name: string;
  description: string;
  cookTime: string;
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
  rating: number;
}

interface Recipe {
  recipe: Recipes;
  nutrients: Nutrients;
  vitamins: Vitamins;
  minerals: Minerals;
}
