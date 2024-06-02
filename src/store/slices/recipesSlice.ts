import {PayloadAction, createSlice} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface UserState {
  userRecipes:
    | [{name: string; isFavourite: boolean; description: string; _id: string}]
    | [];
  favouriteRecipes: [{name: string; description: string; _id: string}] | [];
}

const initialState: UserState = {
  userRecipes: [],
  favouriteRecipes: [],
};

export const userSlice = createSlice({
  name: 'recipes',
  initialState,
  reducers: {
    setUserRecipes: (state, actions) => {
      state.userRecipes = actions.payload;
    },
    setFavouriteRecipes: (state, actions) => {
      state.favouriteRecipes = actions.payload;
    },
    deleteUserRecipe: (state, actions) => {
      const newArr = state.userRecipes.filter(
        item => item._id !== actions.payload,
      );
      state.userRecipes = newArr;
    },
    deleteFavouriteRecipe: (state, actions) => {
      const newArr = state.favouriteRecipes.filter(
        item => item._id !== actions.payload,
      );
      state.favouriteRecipes = newArr;
    },
    addFavouriteRecipe: (
      state,
      actions: PayloadAction<{
        _id: string;
        description: string;
        isFavourite: string;
        name: string;
      }>,
    ) => {
      state.favouriteRecipes.push(actions.payload);
    },
    addUserRecipe: (
      state,
      actions: PayloadAction<{_id: string; description: string; name: string}>,
    ) => {
      state.userRecipes.push(actions.payload);
    },
  },
});

export const {
  addFavouriteRecipe,
  addUserRecipe,
  deleteFavouriteRecipe,
  deleteUserRecipe,
  setFavouriteRecipes,
  setUserRecipes,
} = userSlice.actions;

export const selectUser = (state: RootState) => state.recipes;

export default userSlice.reducer;
