import axios from 'axios';
import {useState} from 'react';
import {$host} from '.';

export function friendsApi() {
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<String | null>(null);

  async function deleteFromFriends(userId: string, friendId: string) {
    setLoading(true);
    setError(null);
    try {
      const {data} = await $host.delete(`api/friends/delete_friend/`, {
        data: {
          userId,
          friendId,
        },
      });
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

  async function addToFriends(userId: string, friendId: string) {
    setLoading(true);
    setError(null);
    try {
      const {data} = await $host.post(`api/friends/request/`, {
        userId,
        friendId,
      });
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

  async function getUserFriendResponses(id: string) {
    setLoading(true);
    setError(null);
    try {
      const {data} = await $host.get(`api/friends/user_res/${id}`);
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
  async function getUserFriendRequests(id: string) {
    setLoading(true);
    setError(null);
    try {
      const {data} = await $host.get(`api/friends/user_req/${id}`);
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

  async function deleteFriendReq(userId: string, friendId: string) {
    setLoading(true);
    setError(null);
    try {
      const {data} = await $host.delete(`api/friends/delete_req/`, {
        data: {userId, friendId},
      });
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

  async function acceptFriendReq(userId: string, friendId: string) {
    setLoading(true);
    setError(null);
    try {
      const {data} = await $host.post(`api/friends/add/`, {
        userId,
        friendId,
      });
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

  return {
    error,
    loading,
    addToFriends,
    deleteFromFriends,
    getUserFriendResponses,
    getUserFriendRequests,
    deleteFriendReq,
    acceptFriendReq,
  };
}
