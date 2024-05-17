import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import {setMeals, updateMealAfterDeletion} from '../slices/MealSlice';

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
      {
        message: string;
        data: {
          info: MealInfo;
          meal: Meal;
          mealType: MealType;
        };
      },
      {
        mealId: string;
        objectId: string;
        mealType: MealType;
        productType: ProductType;
        data: {
          nutrients: Nutrients;
          vitamins: Vitamins;
          minerals: Minerals;
        };
      }
    >({
      query: ({
        mealId,
        objectId,
        mealType,
        productType,
        data: {nutrients, vitamins, minerals},
      }) => ({
        url: '/meals',
        method: 'DELETE',
        body: {
          mealId,
          objectId,
          mealType,
          productType,
          data: {nutrients, vitamins, minerals},
        },
      }),
      async onQueryStarted({}, {queryFulfilled, dispatch}) {
        try {
          const {data} = await queryFulfilled;
          //@ts-ignore
          dispatch(updateMealAfterDeletion(data.data));
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
