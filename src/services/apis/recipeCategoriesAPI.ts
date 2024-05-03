import { $host } from "./index"

export const fetchRecipeCategories = async () => {
    const {data} = await $host.get('api/recipecat')
    return data
}