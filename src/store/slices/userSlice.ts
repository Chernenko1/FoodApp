import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';

interface UserState {
  isAuth: boolean;
  user: User;
}

const initialState: UserState = {
  user: {},
};

export const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    setUser(state, action) {
      state.user = action.payload;
    },
    updateDetails(state, action) {
      state.user.details = {
        ...state.user.details,
        [action.payload.type]: action.payload.value,
      };
    },
    updateReqMacros(state, action) {
      state.user.required_macros = action.payload;
    },
    addWeight(state, action: PayloadAction<{day: string; weight: number}>) {
      const {day, weight} = action.payload;
      state.user.target_details.weightStatistic.push({day, weight});
    },
  },
});

export const {setUser, updateDetails, updateReqMacros, addWeight} =
  userSlice.actions;

export const selectUser = (state: RootState) => state.user;

export default userSlice.reducer;
