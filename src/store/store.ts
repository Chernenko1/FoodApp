import {combineReducers, configureStore} from '@reduxjs/toolkit';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {persistReducer, persistStore} from 'redux-persist';
import userReducer from './slices/userSlice'
import productReducer from './slices/productSlice'
import recipesReducer from './slices/recipesSlice';

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

const userPersistReducer = persistReducer (userPersistConfig, userReducer)
const productPersistReducer = persistReducer(productPersistConfig, productReducer)
const recipesPersistReducer = persistReducer(recipesPersistConfig, recipesReducer)

const reducers = combineReducers({
  user: userPersistReducer,
  product: productPersistReducer,
  recipes: recipesPersistReducer
});

export const store = configureStore({
  reducer: reducers,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware({
      serializableCheck: false,
      immutableCheck: false,
    }),
});

export const persistor = persistStore(store);

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
