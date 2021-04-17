import axios from 'axios';
import getEnv from 'getenv';
import jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = getEnv('REACT_APP_JWT_SECRET_KEY');
const SESSION_INFO = 'SESSION_INFO';

export const userLoggedIn = (accessToken: string) => {
  localStorage.setItem(SESSION_INFO, accessToken);
  axios.defaults.headers.common['Authorization'] = accessToken;
  return jwt.verify(accessToken, JWT_SECRET_KEY);
};

export const userLoggedOut = () => {
  localStorage.removeItem(SESSION_INFO);
  delete axios.defaults.headers.common['Authorization'];
};
