import { createStore } from 'redux';
import { authReducer } from './auth/reducers';


export default createStore(authReducer);