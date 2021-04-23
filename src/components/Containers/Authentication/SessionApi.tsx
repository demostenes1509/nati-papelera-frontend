import getEnv from 'getenv';
import jwt from 'jsonwebtoken';

const JWT_SECRET_KEY = getEnv('REACT_APP_JWT_SECRET_KEY');
const SESSION_INFO = 'SESSION_INFO';

export const userLoggedIn = (accessToken: string) => {
  localStorage.setItem(SESSION_INFO, accessToken);
  return jwt.verify(accessToken, JWT_SECRET_KEY);
};

export const userLoggedOut = () => {
  localStorage.removeItem(SESSION_INFO);
};

export const getToken = () => {
  return localStorage.getItem(SESSION_INFO);
};
