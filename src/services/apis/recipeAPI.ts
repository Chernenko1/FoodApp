import {$host} from './index';

export const fetchRecipes = async () => {
  const {data} = await $host.get('api/recipe');
  return data;
};

export const fetchRecipe = async (id: string) => {
  const {data} = await $host.get(`api/recipe/${id}`);
  return data;
};

export const createRecipe = async (recipe: any) => {
  const {data} = await $host.post('api/recipe/create', recipe);
  return data;
};
