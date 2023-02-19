import axios from "axios";
import { BASE_URL } from "../env/env.config";

export const CallAPI = axios.create({
  baseURL: BASE_URL,
  withCredentials: false,
  headers: {
    "Content-type": "application/json",
    "Access-Control-Allow-Origin": "*",
  },
});

CallAPI.interceptors.request.use((req) => {
  return req;
});

CallAPI.interceptors.response.use(async (res) => {
  const { status } = res;
  console.log(status);
  return res;
});
