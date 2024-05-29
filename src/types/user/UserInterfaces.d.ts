interface User {
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
  target_details: {
    startWeight: number;
    targetWeight: number;
    weightStatistic: {day: string; weight: number}[];
  };
}

interface Friends {
  username: string;
  friends: UserFriends[];
  userRequests: string[];
  userResponses: string[];
  _id: string;
}

interface UserFriends {
  _id: string;
  username: string;
}
