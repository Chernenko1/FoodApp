import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import {setMeals} from '../slices/MealSlice';

export const mealsAPI = createApi({
  reducerPath: 'mealsApi',
  baseQuery: fetchBaseQuery({baseUrl: Config.URL + '/api'}),
  tagTypes: ['Meals'],
  endpoints: builder => ({
    fetchDayMeals: builder.query<Meals, {id: string; date: string}>({
      query: ({id, date}) => `/meals/${id}/${date}`,
      async onQueryStarted({}, {queryFulfilled, dispatch}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setMeals(data));
        } catch (error) {
          console.log(error);
        }
      },
      providesTags: result => ['Meals'],
    }),
    deleteProductInMeal: builder.mutation<
      Meals,
      {mealId: string; id: string; type: string}
    >({
      query: ({mealId, id, type}) => ({
        url: '/meals',
        method: 'DELETE',
        body: {mealId, id, type},
      }),
      async onQueryStarted({}, {queryFulfilled, dispatch}) {
        try {
          const {data} = await queryFulfilled;
          dispatch(setMeals(data));
        } catch (error) {
          console.log(error);
        }
      },
    }),
    updateProductInMeal: builder.mutation<
      Meals,
      {mealId: string; _id: string; type: string; quantity: string}
    >({
      query: ({mealId, _id, type, quantity}) => ({
        url: '/meals/product',
        method: 'PUT',
        body: {mealId, _id, type, quantity},
      }),
      invalidatesTags: _ => ['Meals'],
    }),
    addProductToMeal: builder.mutation<
      Meals,
      {
        userId: string;
        date: string;
        type: string;
        data: {productId: string; quantity: string};
      }
    >({
      query: ({userId, date, data, type}) => ({
        url: '/meals',
        method: 'POST',
        body: {userId, date, data, type},
      }),
      invalidatesTags: _ => ['Meals'],
    }),
  }),
});

export const {
  useFetchDayMealsQuery,
  useDeleteProductInMealMutation,
  useUpdateProductInMealMutation,
  useAddProductToMealMutation,
} = mealsAPI;
