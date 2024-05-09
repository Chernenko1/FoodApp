import {$host} from '.';

export const getMealData = async (id: string, mealType: string) => {
  const {data} = await $host.get(`/api/meals/one/${id}/${mealType}`);
  return data;
};

export const addProductToMeal = async (productInfo: {}) => {
  const {data} = await $host.post(`api/meals`, productInfo);
  return data;
};

export const addFoodToMeal = async (foodInfo: upLoadObject) => {
  const {data} = await $host.post(`api/meals`, foodInfo);
  return data;
};

export const deleteProducFromMeal = async (productInfo: {}) => {
  const {data} = await $host.delete(`api/meals`, {data: productInfo});
  return data;
};
