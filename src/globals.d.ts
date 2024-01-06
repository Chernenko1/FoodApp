declare interface Recipe {
    '_id': string, 
  name: string, 
  description: string, 
  products:
  {
    productId: string, 
    quantity: number
  }[],
  image: string,
  cookingTime: string,
  serves: number,
  rating: number,
  kcal: number,
  createdAt: string,
  updatedAt: string
}