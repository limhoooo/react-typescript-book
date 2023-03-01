import { createActions, handleActions } from 'redux-actions';

interface AuthState {
    token: string | null;
    loading: boolean;
    error: Error | null;
}

const init: AuthState = {
    token: null,
    loading: false,
    error: null
}

const prefix = 'my-boooks/auth'

export const { pending, success, fail } = createActions('PENDING', 'SUCCESS', 'FAIL', { prefix });

const reducer = handleActions<AuthState, string>({
    PENDING: (state) => ({
        ...state,
        loading: true,
        error: null
    }),
    SUCCESS: (state, action) => ({
        token: action.payload,
        loading: true,
        error: null
    }),
    FAIL: (state, action: any) => ({
        ...state,
        loading: true,
        error: action.payload
    }),
}, init, { prefix })

export default reducer;

export function authSaga() { }