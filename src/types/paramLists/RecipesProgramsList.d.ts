type RecipesParamList = {
  RecipesStack: undefined;
  Recipe: {
    _id: string;
  };
  Search: {
    mealType?: MealType;
    productType: ProductType;
  };
  FoodAdd: {
    id: string;
    mealType: MealType;
    productType: ProductType;
  };
};
