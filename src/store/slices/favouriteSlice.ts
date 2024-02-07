import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface FavouriteState {
 id: string[]
}

const initialState: FavouriteState = {
 id: []
};

export const userSlice = createSlice({
  name: "favourite",
  initialState,
  reducers: {
    addFavourite(state, action) {
        state.id.push(action.payload)
    },
    removeFavourite(state, action) {
        state.id = state.id.filter(item => item !== action.payload)
    }
  },
});

export const {addFavourite, removeFavourite} = userSlice.actions;

export const selectUser = (state: RootState) => state.favourite;

export default userSlice.reducer;
