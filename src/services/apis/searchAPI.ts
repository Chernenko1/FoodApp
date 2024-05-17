import {$host} from '.';

export const searchProduct = async (text: string) => {
  const {data} = await $host.get(`api/search/?search=${text}`);
  return data;
};
