import {$host} from '.';

export const searchProduct = async (text: string) => {
  const {data} = await $host.get(`api/product/search?search=${text}`);
  return data;
};

export const getProduct = async (id: string, quantity: string) => {
  let {data} = await $host.get(`api/product/${id}/${quantity}`);
  return data;
};

export const addProduct = async (product: Product) => {
  const {data} = await $host.post(`api/product`, product);
  return data;
};
