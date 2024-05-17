type MealType = 'breakfast' | 'dinner' | 'lunch' | 'snack';

interface MealInfo {
  necessaryCalories: number;
  totalCalories: number;
  nutrients: Nutrients;
  vitamins: Vitamins;
  minerals: Minerals;
}

interface Meal {
  products: MealProduct[];
  recipes: MealProduct[];
  calories: number;
}

interface MealProduct {
  _id: string;
  objectId: string;
  weight: number;
  name: string;
  nutrients: Nutrients;
  minerals: Minerals;
  vitamins: Vitamins;
}
interface Meals {
  _id: string;
  date: string;
  breakfast: Meal;
  lunch: Meal;
  dinner: Meal;
  snack: Meal;
  info: MealInfo;
}
