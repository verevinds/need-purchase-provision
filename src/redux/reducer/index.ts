import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import usersReducer from './usersReducer';

const CombineReducers = combineReducers({
  users: usersReducer,
  auth: authReducer,
});

export type IState = ReturnType<typeof CombineReducers>;
export default CombineReducers;
