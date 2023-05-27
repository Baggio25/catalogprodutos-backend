import axios, { AxiosRequestConfig } from 'axios';
import qs from 'qs';
import jwtDecode from 'jwt-decode';

import history from './history';

export type Role = "ROLE_OPERATOR" | "ROLE_ADMIN";

export type TokenData = {
  exp: number;
  user_name: string;
  authorities: Role[];
}

type LoginData = {
  username: string;
  password: string;
};

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userFirstName: string;
  userId: number;
};

export const BASE_URL =
  process.env.REACT_APP_BACKEND_URL ?? 'http://localhost:8080';
const CLIENT_ID = process.env.REACT_APP_CLIENT_ID ?? 'catalogo';
const CLIENT_SECRET = process.env.REACT_APP_CLIENT_SECRET ?? 'catalogo123';
const TOKEN_KEY = 'authData';

export const requestBackendLogin = (loginData: LoginData) => {
  const headers = {
    'Content-Type': 'application/x-www-form-urlencoded',
    Authorization: 'Basic ' + window.btoa(CLIENT_ID + ':' + CLIENT_SECRET),
  };

  const data = qs.stringify({
    ...loginData,
    grant_type: 'password',
  });

  return axios({
    method: 'POST',
    baseURL: BASE_URL,
    url: '/oauth/token',
    data,
    headers,
  });
};

export const requestBackend = (config: AxiosRequestConfig) => {
  const headers = config.withCredentials ? {
        ...config.headers,
        Authorization: 'Bearer ' + getAuthData().access_token,
      } : config.headers;

  return axios({ ...config, baseURL: BASE_URL, headers });
};

export const saveAuthData = (loginResponse: LoginResponse) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(loginResponse));
};

export const getAuthData = () => {
  const localStorageItem = localStorage.getItem(TOKEN_KEY) ?? '{}';
  return JSON.parse(localStorageItem) as LoginResponse;
};

export const removeAuthData = () => {
  localStorage.removeItem(TOKEN_KEY);
}

export const getTokenData = () : TokenData | undefined => {
  try{
    return jwtDecode(getAuthData().access_token) as TokenData;
  }catch(error) {
    return undefined;
  }
}

export const isAuthenticated = () : boolean => {
  const tokenData = getTokenData();    
  return (tokenData && ((tokenData.exp * 1000) > Date.now())) ? true : false;
}

export const hasAnyRoles = (roles: Role[]) : boolean => {
  if(roles.length === 0) {
    return true;
  }

  const tokenData = getTokenData();
  if(tokenData !== undefined) {
    return roles.some(role => tokenData.authorities.includes(role));
  }

  return false;
}

axios.interceptors.request.use(function (config) {
  return config;
}, function (error) {
  return Promise.reject(error);
});

axios.interceptors.response.use(function (response) {
  return response;
}, function (error) {
  if(error.response.status === 401) {
    history.push("/admin/auth");
  }
  return Promise.reject(error);
});