interface upLoadObject {
  userId: string;
  date: string;
  mealType: MealType;
  productType: 'food' | 'recipe';
  data: {id: string; weight: number; nutrients: Nutrients};
}
