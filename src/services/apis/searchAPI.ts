import {$host} from '.';

export const searchProduct = async (text: string, filter: ProductType) => {
  const {data} = await $host.get(`/api/search/${filter}/?search=${text}`);
  return data;
};
