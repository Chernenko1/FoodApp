import { $host } from "."


export const updateUserDetails = async (details: {id: string, type: string, data: string | number, updateMacros?: boolean}) => {
    const {data} = await $host.put('api/user/details', details)
    return data
}

export const updateUserBFUUsingCalories = async (id: string, calories: string) => {
    const {data} = await $host.put('api/user/bfu', {id, calories})
    return data
}

export const updateUserCaloriesUsingBFU = async (id: string, bfu: {}) => {
    const {data} = await $host.put('api/user/calories', {id, bfu})
    return data
}