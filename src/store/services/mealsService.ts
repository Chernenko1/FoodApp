import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import Config from "react-native-config";
import { setMeals } from "../slices/MealSlice";

 export const mealsAPI = createApi({
    reducerPath: 'mealsApi',
    baseQuery: fetchBaseQuery({baseUrl: Config.URL + '/api'}),
    endpoints: builder => ({
        fetchDayMeals: builder.query<Meals, {id: string, date: string}>({
             query: ({id, date}) => `/meals/${id}/${date}`,
            async onQueryStarted ({id, date}, {queryFulfilled, dispatch}) {
                try {
                    const {data} = await queryFulfilled
                    dispatch(setMeals(data))
                } catch (error) {
                    console.log(error)
                }
             }
        })
    })
 })

 export const {useFetchDayMealsQuery} = mealsAPI