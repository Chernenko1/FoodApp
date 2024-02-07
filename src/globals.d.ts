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