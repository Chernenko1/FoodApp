import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
  recipes: {
    '_id': string, 
  name: string, 
  description: string, 
  products:
  {productId: string, 
    quantity: number
  }[],
  image: string,
  cookingTime: string,
  serves: number,
  rating: number,
  kcal: number,
  createdAt: string,
  updatedAt: string
}[]
}

const initialState: UserState = {
  recipes: [
    {
        "_id": "recipe_id_1",
        "name": "Recipe 1",
        "description": "Description of Recipe 1...",
        "products": [
          {
            "productId": "product_id_1",
            "quantity": 200
          }
        ],
        "image": "https://i.pinimg.com/564x/45/51/98/4551980962fd484c79d32649e4995dde.jpg",
        cookingTime: '35 min',
        serves: 4,
        rating: 4.5,
        kcal: 536,
        "createdAt":"timestamp",
        "updatedAt":"timestamp"
      },
      {
        "_id": "recipe_id_2",
        "name": "Recipe 2",
        "description": "Description of Recipe 2...",
        "products": [
          {
            "productId": "product_id_1",
            "quantity": 150
          },
          {
            "productId": "product_id_2",
            "quantity": 100
          }
        ],
        "image": "https://bgr.com/wp-content/uploads/2022/02/chicken-salad.jpg?quality=82&strip=all",
       
        cookingTime: '15 min',
        serves: 2,
        rating: 4.8,
        kcal: 394,
        "createdAt":"timestamp",
        "updatedAt":"timestamp"
      }
  ]
};

export const userSlice = createSlice({
  name: "recipes",
  initialState,
  reducers: {
 
  },
});

export const { } = userSlice.actions;

export const selectUser = (state: RootState) => state.recipes;

export default userSlice.reducer;
