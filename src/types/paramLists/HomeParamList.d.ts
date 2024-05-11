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
  FoodCard: {
    id: string;
    mealType: MealType;
    action: 'add' | 'update';
    fetchFunc: (id: string) => Promise<any>;
  };
};
