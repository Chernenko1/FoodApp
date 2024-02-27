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
    updateDetails(state, action) {
      state.user.details =  {...state.user.details, [action.payload.type]: action.payload.value}
    },
    updateReqMacros(state, action) {
      state.user.required_macros = action.payload
    }
  },
});

export const { setIsAuth, setUser, updateDetails, updateReqMacros } = userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
