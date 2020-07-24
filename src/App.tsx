import React, { memo, Fragment } from 'react';
export interface IApp {}

const App: React.FC<IApp> = (props) => {
  return <Fragment></Fragment>;
};

export default memo(App);
