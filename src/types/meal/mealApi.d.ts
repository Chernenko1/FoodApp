interface upLoadObject {
  userId: string;
  date: string;
  mealType: MealType;
  productType: ProductType;
  data: {id: string; weight: number; name: string; nutrients: Nutrients};
}

interface delObject {
  data: {
    nutrients: Nutrients;
    weight: number;
  };
  mealProductId: string;
  mealId: string;
  mealType: MealType;
}
