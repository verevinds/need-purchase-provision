import * as React from 'react';

export interface ITestComponent {}

const TestComponent: React.FC<ITestComponent> = () => {
  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default React.memo(TestComponent);
