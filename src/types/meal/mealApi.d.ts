interface upLoadObject {
  userId: string;
  date: string;
  type: MealType;
  data: {id: string; weight: number; nutrients: MicMacNutrients};
}
