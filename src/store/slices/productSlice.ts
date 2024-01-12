import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
  products: {}[]
}

const initialState: UserState = {
  products: [
    {
        "_id": "product_id_1",
        "name": "Product 1",
        "calories": 100,
        "protein": 10,
        "fat": 5,
        "carbohydrates": 15,
        "otherInfo": "Additional information about Product 1",
        "image": "https://example.com/product_image_1.jpg",
        "createdAt":"timestamp",
        "updatedAt":"timestamp"
      },
      {
        "_id": "product_id_2",
        "name": "Product 2",
        "calories": 150,
        "protein": 12,
        "fat": 8,
        "carbohydrates": 20,
        "otherInfo": "Additional information about Product 2",
        "image": "https://example.com/product_image_2.jpg",
        "createdAt":"timestamp",
        "updatedAt":"timestamp"
      }
  ]
};

export const userSlice = createSlice({
  name: "product",
  initialState,
  reducers: {
 
  },
});

export const { } = userSlice.actions;

export const selectUser = (state: RootState) => state.product;

export default userSlice.reducer;
