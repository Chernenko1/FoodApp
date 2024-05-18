type RecipesParamList = {
  RecipesStack: undefined;
  Recipe: {
    _id: string;
  };
  RecipeCreate: {
    products?: {
      id: string;
      name: string;
      weight: number;
    };
  };
  Search: {
    mealType: MealType;
    productType?: ProductType;
  };
  SearchProductForRecipe: undefined;
  ProductAdd: {
    id: string;
  };
  FoodAdd: {
    id: string;
    mealType: MealType;
    productType: ProductType;
  };
};
