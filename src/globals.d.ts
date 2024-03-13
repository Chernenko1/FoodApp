declare interface Recipe {
    '_id': string, 
  name: string, 
  description: string, 
  cookTime: string,
  products:
  {
    productId: string, 
    quantity: number
  }[],
  image: string,
  service: number,
  ingrediants: [],
  instruction: string[],
  category: []
  rating: number,
}

declare interface RecipeCategories {
  '_id': string,
  name: string
}

declare interface Product {
  _id: string,
  name: string,
  nutrients: {
    calories:number,
    protein: number,
    fat:number,
    carbohydrates: number,
    water?: number,
    dietaryFiber?: number
  },
  vitamins?: {
    B1: number
  },
  minerals?: {
    Mg: number,
    },
  picture?: string,
}

declare interface User {
  _id: string,
  username: string,
  email: string,
  details: {
    weight: number,
    height: number,
    age: number,
    gender: boolean,
    purpose: number,
    fatPercentage: number,
    activity: number
  },
  required_macros: {
    calories: number,
    fat: number,
    protein: number,
    carbohydrates: number
  }
}

declare interface Meals {
  _id: string,
  date: string,
  breakfast: [{ productId: string, quantity: number}],
  lunch:  [{ productId: string, quantity: number}],
  dinner: [{ productId: string, quantity: number}], 
  snack:  [{ productId: string, quantity: number}],
  info: {
    necessaryCalories: number,
    totalCalories: number
    fat: number,
    protein: number,
    carbohydrates: number
  }
}