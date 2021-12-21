import { AUTH_LOGIN } from '../types';

export const login = (info) => {
  return {
    type: AUTH_LOGIN,
    data: info
  }
}