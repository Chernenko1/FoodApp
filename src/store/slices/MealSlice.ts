import {createSlice, PayloadAction} from '@reduxjs/toolkit';
import {RootState} from '../store';
import userSlice from './userSlice';

interface Meal {
  meals: Meals;
}

const initialState: Meal = {
  meals: {
    _id: '',
    date: '',
    breakfast: {
      products: [],
      recipes: [],
      calories: 0,
    },
    lunch: {
      products: [],
      recipes: [],
      calories: 0,
    },
    dinner: {
      products: [],
      recipes: [],
      calories: 0,
    },
    snack: {
      products: [],
      recipes: [],
      calories: 0,
    },
    info: {
      necessaryCalories: 0,
      totalCalories: 35,
      nutrients: {
        calories: 0,
        fat: 0,
        protein: 0,
        carbohydrates: 0,
        dietaryFiber: 0,
        water: 0,
      },
      vitamins: {
        B1: 0,
        B2: 0,
        B3: 0,
        B5: 0,
        B6: 0,
        B7: 0,
        B9: 0,
        B12: 0,
        C: 0,
        A: 0,
        D: 0,
        E: 0,
        K: 0,
      },
      minerals: {
        Mn: 0,
        Fe: 0,
        NaCL: 0,
        Mg: 0,
        P: 0,
        Ca: 0,
        Na: 0,
        Zn: 0,
        Cu: 0,
        I: 0,
        Se: 0,
        Cr: 0,
        K: 0,
        Mo: 0,
      },
    },
  },
};

export const mealsSlice = createSlice({
  name: 'meals',
  initialState,
  reducers: {
    setMeals(state, action) {
      state.meals = action.payload;
    },
    updateMealAfterDeletion(
      state,
      action: PayloadAction<{info: MealInfo; mealType: MealType; meal: Meal}>,
    ) {
      state.meals.info = action.payload.info;
      //@ts-ignore
      state.meals[action.payload.mealType] = action.payload.meal;
    },
  },
});

export const {setMeals, updateMealAfterDeletion} = mealsSlice.actions;

export const selectMeals = (state: RootState) => state.meals;

export default mealsSlice.reducer;
