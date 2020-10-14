import axios from "axios";
import { AxiosResponse, AxiosError, AxiosPromise } from "axios";

const BASE_URL = "http://172.20.10.3:4000";

const onSuccess = (res: AxiosResponse) => {
  return res.data;
};

const onError = (err: AxiosError) => {
  console.error("Request Failed:", err.config);
  if (err.response) {
    console.error("Status:", err.response.status);
    console.error("Data:", err.response.data);
    console.error("Headers:", err.response.headers);
  } else {
    console.error("Error message:", err.message);
  }
  return Promise.reject(err.response || err.message);
};

export const get = async (url: string, params?: any) => {
  return axios
    .get(BASE_URL + url, {
      params,
    })
    .then(onSuccess)
    .catch(onError);
};

export const post = async (url: string, data?: any) => {
  return axios
    .post(BASE_URL + url, data)
    .then(onSuccess)
    .catch(onError);
};
