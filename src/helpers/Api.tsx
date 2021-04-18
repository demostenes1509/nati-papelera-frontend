import axios, { AxiosResponse, AxiosRequestConfig } from 'axios';
import getEnv from 'getenv';

const API_URL = getEnv('REACT_APP_API_URL');
const TIMEOUT = getEnv.int('REACT_APP_TIMEOUT');

const client = axios.create({
  baseURL: API_URL,
  timeout: TIMEOUT,
});

const request = <P,>(config: AxiosRequestConfig): Promise<AxiosResponse<P>> => {
  return client.request(config);
};

export default request;
