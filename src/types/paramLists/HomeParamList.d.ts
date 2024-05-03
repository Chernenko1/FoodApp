type HomeParamList = {
  StackHome: undefined;
  Search: {
    backScreen: string;
    screenParams?: {
      mealType?: MealType;
    };
  };
  MealInfo: {
    headerTitle?: string;
    mealType: MealType;
  };
  ProductInfo: {
    productData: ProductInfo;
    mealType: MealType;
    func: 'add' | 'update';
  };
  ProductCreate: undefined;
};
