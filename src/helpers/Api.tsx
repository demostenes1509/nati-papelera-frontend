import axios, { Method, AxiosResponse } from 'axios';
import getEnv from 'getenv';

const API_URL = getEnv('REACT_APP_API_URL');
const TIMEOUT = getEnv.int('REACT_APP_TIMEOUT');

const client = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT,
});

const request = <P,>(url: string, method: Method, data?: string): Promise<AxiosResponse<P>> => {
  return client.request({ url, method, headers: {}, data });
};

export default request;
