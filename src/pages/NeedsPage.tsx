import * as React from 'react';

export interface INeedsPage {}

const NeedsPage: React.FC<INeedsPage> = () => {
  return <>need</>;
};

export default React.memo(NeedsPage);
