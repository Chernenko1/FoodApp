import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";
import { formatDate } from "../../utils/formDate";

interface IAppSettings {
    date: string,
}

const initialState: IAppSettings = {
    date: formatDate(new Date())
}

export const appSettingsSlice = createSlice({
    name: 'app',
     initialState,
     reducers: {
        setAppDate(state, action) {
            state.date = action.payload
        }
     }
})

export const {setAppDate} = appSettingsSlice.actions

export const selectAuth = (state: RootState) => state.app

export default appSettingsSlice.reducer