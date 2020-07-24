import * as React from 'react';

export interface IMainPage {}

const MainPage: React.FC<IMainPage> = () => {
  return <>main</>;
};

export default React.memo(MainPage);
