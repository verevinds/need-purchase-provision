import { combineReducers } from 'redux';
import { needsReducer } from './needsReducer';
import { rolesReducer } from './rolesReducer';
import { authReducer } from './authReducer';
import usersReducer from './usersReducer';
import contractReducer from './contractReducer';

const CombineReducers = combineReducers({
  users: usersReducer,
  auth: authReducer,
  contracts: contractReducer,
  roles: rolesReducer,
  needs: needsReducer,
});

export type IState = ReturnType<typeof CombineReducers>;
export default CombineReducers;
