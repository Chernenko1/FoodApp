import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Meal {
    isDay: boolean,
    meal: {
        breakfast: [{quantity: number}]
    }
}