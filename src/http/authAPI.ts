import { $host } from ".";

export const login = async (logs: {}) => {
   let {data} =  await $host.post('api/auth/login', logs)
   return data
}