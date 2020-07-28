import { RULES_REQUEST_SUCCESSED } from '../constants';
import { TRole } from '../reducer/rolesReducer';

export const rolesRequestSuccessed = (data: TRole[]) => ({ type: RULES_REQUEST_SUCCESSED, data });

export type RolesAction = ReturnType<typeof rolesRequestSuccessed>;
