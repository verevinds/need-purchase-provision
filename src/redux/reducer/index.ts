import { combineReducers } from 'redux';
import { authReducer } from './authReducer';
import usersReducer from './usersReducer';
import contractReducer from './contractReducer';

const CombineReducers = combineReducers({
  users: usersReducer,
  auth: authReducer,
  contracts: contractReducer,
});

export type IState = ReturnType<typeof CombineReducers>;
export default CombineReducers;
