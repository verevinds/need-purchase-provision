import * as React from 'react';

export interface INominationPage {}

const NominationPage: React.FC<INominationPage> = () => {
  return <>nomination</>;
};

export default React.memo(NominationPage);
