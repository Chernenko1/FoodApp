type HomeParamList = {
  StackHome: undefined;
  Search: {
    backScreen: string;
    mealType: MealType;
  };
  MealInfo: {
    headerTitle?: string;
    mealType: MealType;
  };
  ProductCreate: undefined;
  FoodAdd: {
    id: string;
    mealType: MealType;
    productType: ProductType;
  };
  FoodChange: {
    product: MealProduct;
    productType: ProductType;
    mealType: MealType;
  };
};
