type RecipesParamList = {
  RecipesStack: undefined;
  Recipe: {
    _id: string;
  };
  FoodCard: {
    id: string;
    mealType: MealType;
    action: 'add' | 'update';
    fetchFunc: (id: string) => Promise<any>;
  };
};
