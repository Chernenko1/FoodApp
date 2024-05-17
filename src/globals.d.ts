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
