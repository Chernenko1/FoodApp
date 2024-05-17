type RecipesParamList = {
  RecipesStack: undefined;
  Recipe: {
    _id: string;
  };
  FoodAdd: {
    id: string;
    mealType: MealType;
    productType: ProductType;
    action: 'add' | 'update';
  };
};
