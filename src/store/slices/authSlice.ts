import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "../store";

interface Auth {
    isAuth: boolean,
    token: string
}

const initialState: Auth = {
    isAuth: false,
    token: ''
}

export const authSlice = createSlice({
    name: 'auth',
    initialState,
    reducers: {
        setAuth(state, action) {
            state.isAuth = action.payload
        },
        setToken(state, action) {
            state.token = action.payload
        }
    }
})

export const {setAuth,setToken} = authSlice.actions

export const selectAuth = (state: RootState) => state.auth

export default authSlice.reducer