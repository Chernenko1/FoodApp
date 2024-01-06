import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface UserState {
  isAuth: boolean;
  user: {};
}

const initialState: UserState = {
  isAuth: false,
  user: {
    "_id": "user_id_1",
    "username": "user123",
    "password": "hashed_password",
    "email": "user123@example.com",
    "createdAt":"timestamp",
    "updatedAt": "timestamp",
  },
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
