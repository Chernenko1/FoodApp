import { $host } from "./index"

export const fetchRecipe = async () => {
    const {data} = await $host.get('api/recipe')
    return data
}

export const createRecipe = async (recipe:any) => {
    console.log(recipe)
    const {data} = await $host.post('api/recipe/create', recipe)
    return data
}