// authCookies.js
import Cookies from 'js-cookie';

const AUTH_COOKIE_NAME = 'isAuthenticated';
const USER_COOKIE_NAME = 'user';

export const setAuthenticated = (value) => {
  Cookies.set(AUTH_COOKIE_NAME, value, { expires: 1 }); // Expires in 1 day, adjust as needed
};

export const getAuthenticated = () => {
  return Cookies.get(AUTH_COOKIE_NAME) === 'true';
};

export const setUser = (value) => {
  Cookies.set(USER_COOKIE_NAME, JSON.stringify(value), { expires: 1 }); // Expires in 1 day, adjust as needed
};

export const getUser = () => {
  const cookieValue = Cookies.get(USER_COOKIE_NAME);
  return cookieValue ? JSON.parse(cookieValue) : null;
};