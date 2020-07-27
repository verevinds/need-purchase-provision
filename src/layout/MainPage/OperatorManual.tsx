import * as React from 'react';

export interface IOperatorManual {}

const OperatorManual: React.FC<IOperatorManual> = () => {
  return <>manual</>;
};

export default React.memo(OperatorManual);
