const TOKEN_KEY = 'authData';

type LoginResponse = {
  access_token: string;
  token_type: string;
  expires_in: number;
  scope: string;
  userFirstName: string;
  userId: number;
};

export const getAuthData = () => {
  const localStorageItem = localStorage.getItem(TOKEN_KEY) ?? '{}';
  return JSON.parse(localStorageItem) as LoginResponse;
};

export const removeAuthData = () => {
  localStorage.removeItem(TOKEN_KEY);
};

export const saveAuthData = (loginResponse: LoginResponse) => {
  localStorage.setItem(TOKEN_KEY, JSON.stringify(loginResponse));
};
