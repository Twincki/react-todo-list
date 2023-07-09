import Cookies from 'js-cookie';

export const saveCookie = (key: string, value: string) => Cookies.set(key, value, { path: '/' });
export const getCookie = (key: string) => Cookies.get(key);
export const removeCookie = (key: string) => Cookies.remove(key);