import { combineReducers } from 'redux';
import usersReducer, { IUsers } from './usersReducer';

const CombineReducers = combineReducers({
  users: usersReducer,
});

export type RootState = ReturnType<typeof CombineReducers>;
export default CombineReducers;
