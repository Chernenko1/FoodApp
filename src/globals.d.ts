declare interface User {
  _id: string;
  username: string;
  email: string;
  details: {
    weight: number;
    height: number;
    age: number;
    gender: boolean;
    purpose: number;
    fatPercentage: number;
    activity: number;
  };
  required_macros: {
    calories: number;
    fat: number;
    protein: number;
    carbohydrates: number;
  };
}

declare interface Meals {
  _id: string;
  date: string;
  breakfast: {
    products: [{productId: string; quantity: number; _id: string}];
    calories: number;
  };
  lunch: {
    products: [{productId: string; quantity: number; _id: string}];
    calories: number;
  };
  dinner: {
    products: [{productId: string; quantity: number; _id: string}];
    calories: number;
  };
  snack: {
    products: [{productId: string; quantity: number; _id: string}];
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
