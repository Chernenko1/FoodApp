import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
  isAuth: boolean;
  user: User;
}

const initialState: UserState = {
  isAuth: false,
  user: {},
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    setIsAuth(state, action) {
      state.isAuth = action.payload;
    },
    setUser(state, action) {
      state.user = action.payload;
    },
  },
});

export const { setIsAuth, setUser } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
