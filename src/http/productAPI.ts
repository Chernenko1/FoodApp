import { $host } from ".";

export const searchProduct = async (text: string) => {
    const {data} = await $host.get(`api/product/search?search=${text}`)
    return data
}

export const getProduct = async (id: string, quantity: string) => {
    let {data} = await $host.get(`api/product/${id}/${quantity}`)
    return data
}