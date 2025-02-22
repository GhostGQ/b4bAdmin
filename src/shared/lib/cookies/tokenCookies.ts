import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setTokenToCookie = (access: string, refresh?: string) => {
  cookies.set('accessToken', access);
  cookies.set('refreshToken', refresh);
};

export const removeTokensFromCookies = () => {
  cookies.remove('accessToken');
  cookies.remove('refreshToken');
};

export const getAccessToken = (): string | undefined =>
  cookies.get<string>('accessToken');
export const getRefreshToken = (): string | undefined =>
  cookies.get<string>('refreshToken');
