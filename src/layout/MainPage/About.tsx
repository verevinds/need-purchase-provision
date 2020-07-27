import * as React from 'react';

export interface IAbout {}

const About: React.FC<IAbout> = () => {
  return <>about</>;
};

export default React.memo(About);
