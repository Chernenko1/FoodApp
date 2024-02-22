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