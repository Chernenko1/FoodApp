import {$host} from '.';

export const searchProduct = async (text: string) => {
  const {data} = await $host.get(`api/product/search?search=${text}`);
  return data;
};

export const getProduct = async (id: string) => {
  let {data} = await $host.get(`api/product/${id}`);
  return data;
};

export const createProduct = async (product: Product) => {
  const {data} = await $host.post(`api/product`, product);
  return data;
};
