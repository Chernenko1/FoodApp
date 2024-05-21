import {useState} from 'react';
import {$host} from '.';
import axios, {AxiosResponse} from 'axios';

export const updateUserDetails = async (details: {
  id: string;
  type: string;
  data: string | number | boolean;
  updateMacros?: boolean;
}) => {
  const {data} = await $host.put('api/user/details', details);
  return data;
};

export const updateUserBFUUsingCalories = async (
  id: string,
  calories: string,
) => {
  const {data} = await $host.put('api/user/bfu', {id, calories});
  return data;
};

export const updateUserCaloriesUsingBFU = async (id: string, bfu: {}) => {
  const {data} = await $host.put('api/user/calories', {id, bfu});
  return data;
};

export function userApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String | unknown>(null);

  async function getUserFriends(id: string) {
    setLoading(true);
    try {
      const {data} = await $host.get(`api/user/friends/${id}`);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      setError(error);
    }
  }

  async function getFriendData(id: string, targetId: string) {
    setLoading(true);
    try {
      const {data} = await $host.get(
        `api/user/profile/?targetId=${targetId}&id=${id}`,
      );
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        console.log('error message: ', error.message);
        setError(error);
        return error.message;
      } else {
        console.log('unexpected error: ', error);
        return 'An unexpected error occurred';
      }
    }
  }

  return {loading, error, getUserFriends, getFriendData};
}
