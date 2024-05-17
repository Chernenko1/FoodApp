type MealType = 'breakfast' | 'dinner' | 'lunch' | 'snack';

declare interface Meals {
  _id: string;
  date: string;
  breakfast: {
    products: [
      {
        id: string;
        weight: number;
        name: string;
        type: 'food' | 'recipe';
        calories: string;
        _id: string;
      },
    ];
    calories: number;
  };
  lunch: {
    products: [
      {
        id: string;
        weight: number;
        name: string;
        type: 'food' | 'recipe';
        calories: string;
        _id: string;
      },
    ];
    calories: number;
  };
  dinner: {
    products: [
      {
        id: string;
        weight: number;
        name: string;
        type: 'food' | 'recipe';
        calories: string;
        _id: string;
      },
    ];
    calories: number;
  };
  snack: {
    products: [
      {
        id: string;
        weight: number;
        name: string;
        type: 'food' | 'recipe';
        calories: string;
        _id: string;
      },
    ];
    calories: number;
  };
  info: {
    necessaryCalories: number;
    totalCalories: number;
    fat: number;
    protein: number;
    carbohydrates: number;
  };
}
