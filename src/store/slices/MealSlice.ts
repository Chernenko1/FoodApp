import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import userSlice from "./userSlice";


const initialState: Meals = {
    _id: '',
    date: '',
    breakfast: {
        products: [],
        calories: 0
    },
    lunch:  {
        products: [],
        calories: 0
    },
    dinner: {
        products: [],
        calories: 0
    }, 
    snack:  {
        products: [],
        calories: 0
    },
    necessaryCalories: 0,
    totalCalories: 0
}

export const mealsSlice = createSlice({
    name: 'meals',
    initialState,
    reducers: {
        setMeals(state, action) {
            state = action.payload
        }
    }
})

export const {setMeals} = mealsSlice.actions

export const selectMeals = (state: RootState) => state.meals

export default mealsSlice.reducer