import * as React from 'react';

export interface IAppContext {
  roles: {
    isModerator: boolean;
    isChief: boolean;
    isResponsible: boolean;
    isMatching: boolean;
    isApprovers: boolean;
    isStorekeeper: boolean;
    isEconomist: boolean;
  };
}

export const AppContext = React.createContext<IAppContext>({
  roles: {
    isModerator: false,
    isChief: false,
    isResponsible: false,
    isMatching: false,
    isApprovers: false,
    isStorekeeper: false,
    isEconomist: false,
  },
});
