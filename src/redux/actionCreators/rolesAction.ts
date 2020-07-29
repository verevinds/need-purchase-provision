import { RULES_REQUEST_SUCCESSED, RULES_UPDATE } from '../constants';
import { TRole } from '../reducer/rolesReducer';

export const rolesRequestSuccessed = (data: TRole[]) => ({ type: RULES_REQUEST_SUCCESSED, data });
export const rolesUpdate = () => ({ type: RULES_UPDATE });

export type RolesAction = ReturnType<typeof rolesRequestSuccessed>;
