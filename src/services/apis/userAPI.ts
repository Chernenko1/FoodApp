import {useState} from 'react';
import {$host} from '.';
import axios from 'axios';

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
  const [error, setError] = useState<String | null>(null);

  async function getUserFriends(id: string) {
    setLoading(true);
    setError(null);
    try {
      const {data} = await $host.get(`api/friends/${id}`);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
        return error.message;
      } else {
        return 'An unexpected error occurred';
      }
    }
  }

  async function getFriendData(id: string, targetId: string) {
    setLoading(true);
    setError(null);

    try {
      const {data} = await $host.get(
        `api/user/profile/?targetId=${targetId}&id=${id}`,
      );
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
        return error.message;
      } else {
        return 'An unexpected error occurred';
      }
    }
  }

  async function searchUsers(username: string) {
    setLoading(false);
    setError(null);
    try {
      const {data} = await $host.get(`api/search/?name=${username}`);
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
      } else {
        return 'An unexpected error occurred';
      }
    }
  }

  async function addNewWeight(id: string, weight: number) {
    setLoading(false);
    setError(null);
    try {
      const {data} = await $host.post(`api/user/weight`, {id, weight});
      setLoading(false);
      return data;
    } catch (error) {
      setLoading(false);
      if (axios.isAxiosError(error)) {
        setError(error.response?.data.message);
      } else {
        return 'An unexpected error occurred';
      }
    }
  }

  return {
    loading,
    error,
    getUserFriends,
    getFriendData,
    searchUsers,
    addNewWeight,
  };
}
