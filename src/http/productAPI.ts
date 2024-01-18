import { $host } from ".";

export const searchProduct = async (text: string) => {
    const {data} = await $host.get(`api/product/search?search=${text}`)
    return data
}