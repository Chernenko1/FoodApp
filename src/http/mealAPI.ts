import { $host } from "."

export const getMealData = async (id:string, mealType: string) => {
    console.log(id, mealType)
    const {data} = await $host.get(`/api/meals/one/${id}/${mealType}`)
    return data
}
export const addProductToMeal = async(productInfo: {}) => {
    console.log(productInfo)
    const {data} = await $host.post(`api/meals`, productInfo)
    return data
}