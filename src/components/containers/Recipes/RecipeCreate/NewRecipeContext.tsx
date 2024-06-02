import {createContext} from 'react';

export const NewRecipeContext = createContext({
  name: '',
  image: '',
  cookTime: 0,
  service: 0,
  description: '',
  ingredients: [],
  instruction: [],
  categories: [],
});
