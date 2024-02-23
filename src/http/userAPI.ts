import { $host } from "."


export const updateUserDetails = async (details: {id: string, type: string, data: string | null}) => {
    const {data} = await $host.put('api/user/details', details)
    return data
}