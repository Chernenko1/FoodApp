import {createApi, fetchBaseQuery} from '@reduxjs/toolkit/query/react';
import Config from 'react-native-config';
import {
  setMeals,
  updateMealAfterAdding,
  updateMealAfterDeletion,
  updateMealAfterUpdating,
} from '../slices/MealSlice';

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
          calories: number;
          objectId: string;
          mealType: MealType;
          productType: ProductType;
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
          dispatch(updateMealAfterDeletion(data.data));
        } catch (error) {
          console.log(error);
        }
      },
    }),

    updateProductInMeal: builder.mutation<
      {
        message: string;
        data: {
          info: MealInfo;
          calories: number;
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
          weight: number;
        };
      }
    >({
      query: ({mealId, data, mealType, objectId, productType}) => ({
        url: '/meals/product',
        method: 'PUT',
        body: {mealId, data, mealType, objectId, productType},
      }),
      async onQueryStarted(
        {data: meal, objectId, mealType, productType},
        {queryFulfilled, dispatch},
      ) {
        try {
          const {data} = await queryFulfilled;
          dispatch(
            updateMealAfterUpdating({
              calories: data.data.calories,
              data: meal,
              info: data.data.info,
              mealType,
              objectId,
              productType,
            }),
          );
        } catch (error) {
          console.log(error);
        }
      },
      invalidatesTags: _ => ['Meals'],
    }),

    addProductToMeal: builder.mutation<
      {
        message: string;
        data: {
          info: MealInfo;
          meal: Meal;
          mealType: MealType;
        };
      },
      {
        userId: string;
        date: string;
        mealType: MealType;
        productType: ProductType;
        data: {
          weight: number;
          id: string;
          name: string;
          nutrients: Nutrients;
          vitamins: Vitamins;
          minerals: Minerals;
        };
      }
    >({
      query: ({userId, date, data, mealType, productType}) => ({
        url: '/meals',
        method: 'POST',
        body: {userId, date, data, mealType, productType},
      }),
      async onQueryStarted({}, {queryFulfilled, dispatch}) {
        try {
          const {data} = await queryFulfilled;
          //@ts-ignore
          dispatch(updateMealAfterAdding(data.data));
        } catch (error) {
          console.log(error);
        }
      },
      invalidatesTags: _ => ['Meals'],
    }),

    getMealsStatistic: builder.query<
      MealsStatistic[],
      {id: string; firstDate: string; secondDate: string}
    >({
      query: ({id, firstDate, secondDate}) =>
        `/meals/statistic/?id=${id}&from=${firstDate}&to=${secondDate}`,
      async onQueryStarted({}, {queryFulfilled}) {
        try {
          const {data} = await queryFulfilled;
        } catch (error) {
          console.log(error);
        }
      },
    }),
  }),
});

export const {
  useFetchDayMealsQuery,
  useDeleteProductInMealMutation,
  useUpdateProductInMealMutation,
  useAddProductToMealMutation,
  useGetMealsStatisticQuery,
} = mealsAPI;
