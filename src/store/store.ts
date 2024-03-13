import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import userReducer from './slices/userSlice'
import productReducer from './slices/productSlice'
import recipesReducer from './slices/recipesSlice';
import favouriteReducer from './slices/favouriteSlice'
import authReducer from './slices/authSlice'
import mealsReducer from './slices/MealSlice';

import { mealsAPI } from './services/mealsService';

const userPersistConfig = {
  key: 'user',
  storage: AsyncStorage,
  blacklist: ['password', 'email'],
}

const productPersistConfig = {
  key: 'product',
  storage: AsyncStorage
}

const recipesPersistConfig = {
  key: 'recipes',
  storage: AsyncStorage
}

const favouritePersistConfig = {
  key: 'favourite',
  storage: AsyncStorage
}

const authPersistConfig = {
  key: 'auth',
  storage: AsyncStorage
}

const mealsPersistConfig = {
  key: 'meals',
   storage: AsyncStorage
}

const userPersistReducer = persistReducer (userPersistConfig, userReducer)
const productPersistReducer = persistReducer(productPersistConfig, productReducer)
const recipesPersistReducer = persistReducer(recipesPersistConfig, recipesReducer)
const favouritePersistReducer = persistReducer(recipesPersistConfig, favouriteReducer)
const authPersistReducer = persistReducer(authPersistConfig, authReducer)
const mealsPersistReducer = persistReducer(mealsPersistConfig, mealsReducer)

const reducers = combineReducers({
  user: userPersistReducer,
  product: productPersistReducer,
  recipes: recipesPersistReducer,
  favourite: favouritePersistReducer,
  auth: authPersistReducer,
  meals: mealsPersistReducer,
  [mealsAPI.reducerPath]: mealsAPI.reducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }).concat(mealsAPI.middleware),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
