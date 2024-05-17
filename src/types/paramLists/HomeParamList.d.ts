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
    action: 'add' | 'update';
  };
  FoodChange: {
    mealProductId: string;
    productId: string;
    weight: number;
    action: 'add' | 'update';
    productType: ProductType;
    mealType: MealType;
  };
};
