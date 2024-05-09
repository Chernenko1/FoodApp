type RecipesParamList = {
  RecipesStack: undefined;
  Recipe: {
    _id: string;
  };
  FoodCard: {
    _id: string;
    name: string;
    nutrients: Nutrients;
    weight: number;
  };
};
