declare interface Recipe {
  _id: string;
  name: string;
  description: string;
  cookTime: string;
  image: string;
  service: number;
  ingredients: {
    productId: string;
    quantity: number;
  }[];
  instruction: string[];
  category: string[];
  rating: number;
}
