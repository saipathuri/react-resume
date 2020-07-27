import { AuthActionTypes, SIGN_IN, SIGN_OUT } from './types';

export function signIn(ACCESS_TOKEN: string): AuthActionTypes {
  return { type: SIGN_IN, ACCESS_TOKEN }
}

export function signOut(): AuthActionTypes {
  return { type: SIGN_OUT }
}