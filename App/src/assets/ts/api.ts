import axios from "axios";
import { access_token } from '$str/store';
import { get } from 'svelte/store';

export const axiosPublic = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL,
  headers: {
    "Content-Type": "application/json",
  },
});

export const axiosPrivate = () => {
  const _access_token = get(access_token);
  return axios.create({
    baseURL: import.meta.env.VITE_API_BASE_URL,
    headers: {
      "Content-Type": "application/json",
      "Authorization": `Bearer ${_access_token}`
    },
  })
};