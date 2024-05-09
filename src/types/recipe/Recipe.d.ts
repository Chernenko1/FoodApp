interface Recipes {
  _id: string;
  name: string;
  description: string;
  cookTime: string;
  weight: number;
  image: string;
  service: number;
  ingredients: {
    productId: {
      name: string;
      id: string;
    };
    quantity: string;
  }[];
  instruction: string[];
  category: string[];
  rating: number;
}

interface Recipe {
  recipe: Recipes;
  nutrients: Nutrients;
}
