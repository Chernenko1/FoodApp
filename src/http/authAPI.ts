import { $host } from ".";

export const login = async (logs: {}) => {
   console.log(logs)
   let {data} =  await $host.post('api/auth/login', logs)
   return data
}

export const registration = async (info: {}) => {
   let {data} = await $host.post('api/auth/registration', info)
   return data
}