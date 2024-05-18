type HomeParamList = {
  StackHome: undefined;
  Search: {
    mealType: MealType;
    productType: ProductType;
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
