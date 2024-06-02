import {useState} from 'react';
import {$host} from './index';
import axios from 'axios';

export const fetchRecipes = async () => {
  const {data} = await $host.get('api/recipe');
  return data;
};

export const fetchRecipe = async (id: string, userId?: string) => {
  const {data} = await $host.get(`api/recipe/${id}/?userId=${userId}`);
  return data;
};

export const createRecipe = async (recipe: any, userId: string) => {
  const {data} = await $host.post('api/recipe/create', {recipe, userId});
  return data;
};

export function recipeApi() {
  const [isLoading, setLoading] = useState(false);
  const [isError, setIsError] = useState(false);
  const [error, setError] = useState<String | null>(null);

  async function getFavourite(userId: string) {
    setLoading(true);
    setIsError(false);
    setError(null);
    try {
      const {data} = await $host.get(`api/recipe/favourite/${userId}`);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setIsError(true);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
        return error.message;
      } else {
        return 'An unexpected error occurred';
      }
    }
  }

  async function postFavourite(userId: string, productId: string) {
    setLoading(true);
    setIsError(false);
    setError(null);
    try {
      const {data} = await $host.post(`api/recipe/favourite/`, {
        userId,
        productId,
      });
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setIsError(true);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
        return error.message;
      } else {
        return 'An unexpected error occurred';
      }
    }
  }

  async function deleteFromFavourite(userId: string, productId: string) {
    setLoading(true);
    setIsError(false);
    setError(null);
    try {
      const {data} = await $host.delete(`api/recipe/favourite/delete`, {
        data: {userId, productId},
      });
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setIsError(true);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
        return error.message;
      } else {
        return 'An unexpected error occurred';
      }
    }
  }
  async function getCreatedRecipes(userId: string) {
    setLoading(true);
    setIsError(false);
    setError(null);
    try {
      const {data} = await $host.get(`api/recipe/created/${userId}`);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setIsError(true);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
        return error.message;
      } else {
        return 'An unexpected error occurred';
      }
    }
  }

  async function deleteRecipe(id: string) {
    setLoading(true);
    setIsError(false);
    setError(null);
    try {
      const {data} = await $host.delete(`api/recipe/${id}`);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setIsError(true);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
        return error.message;
      } else {
        return 'An unexpected error occurred';
      }
    }
  }

  return {
    error,
    isLoading,
    isError,
    getFavourite,
    postFavourite,
    deleteFromFavourite,
    getCreatedRecipes,
    deleteRecipe,
  };
}
