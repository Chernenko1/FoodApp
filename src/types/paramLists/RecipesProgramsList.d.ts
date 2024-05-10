type RecipesParamList = {
  RecipesStack: undefined;
  Recipe: {
    _id: string;
  };
  FoodCard: {
    _id: string;
    name: string;
    micmacNutrients: {
      nutrients: Nutrients;
      vitamins: Vitamins;
      minerals: Minerals;
    };
    weight: number;
  };
};
