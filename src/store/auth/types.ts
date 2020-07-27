// actions
export const SIGN_IN = 'SIGN_IN';
export const SIGN_OUT = 'SIGN_OUT';

interface SIGN_IN_ACTION {
    type: typeof SIGN_IN,
    ACCESS_TOKEN: string
}

interface SIGN_OUT_ACTION {
    type: typeof SIGN_OUT
}

export type AuthActionTypes = SIGN_IN_ACTION | SIGN_OUT_ACTION;

// state
export interface AuthState {
    SIGNED_IN: boolean,
    ACCESS_TOKEN?: string
}