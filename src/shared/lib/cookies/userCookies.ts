import {IUser} from '@entities/user/model/types';
import Cookies from 'universal-cookie';

const cookies = new Cookies();

export const setUserCookie = (user: IUser | undefined) => {
  if (user) {
    cookies.set('user', user);
  }
};

export const getUserCookie = (): IUser | undefined =>
  cookies.get<IUser>('user');

export const removeUserCookie = () => {
  cookies.remove('user');
};
