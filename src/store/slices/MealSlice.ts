import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import userSlice from "./userSlice";


const initialState: Meals = {
    _id: '',
    date: '',
    breakfast: [],
    lunch:  [],
    dinner: [], 
    snack:  [],
    necessaryCalories: 0,
    totalCalories: 0
}

export const mealsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
        addMeals(state, action) {
            state = action.payload
        }
    }
})

export const {addMeals} = mealsSlice.actions

export const selectMeals = (state: RootState) => state.meals

export default mealsSlice.reducer