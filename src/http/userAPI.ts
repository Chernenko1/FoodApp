import { $host } from "."


export const updateUserDetails = async (details: {id: string, type: string, data: string | number, updateMacros?: boolean}) => {
    const {data} = await $host.put('api/user/details', details)
    return data
}