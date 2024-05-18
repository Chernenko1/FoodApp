import {createContext} from 'react';

export const NewRecipeContext = createContext({
  name: '',
  cookTime: 0,
  service: 0,
  description: '',
  ingredients: [],
  instruction: [],
  categories: [],
});
