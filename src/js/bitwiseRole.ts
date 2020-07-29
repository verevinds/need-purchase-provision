import { TRole } from '../redux/reducer/rolesReducer';

const bitwiseRole = (roles: TRole[] | null, extent: number) => {
  return {
    find: (() => roles?.find((role: TRole) => parseInt(String(role.role & extent), 10) > 0))(),
    filter: (() => roles?.filter((role: TRole) => parseInt(String(role.role & extent), 10) > 0))(),
  };
};

export default bitwiseRole;
