import * as React from 'react';
import { useSelector } from 'react-redux';
import { IState } from '../../redux/reducer';

export interface ITestComponent {}

const TestComponent: React.FC<ITestComponent> = () => {
  const { user } = useSelector((state: IState) => state.auth);

  React.useEffect(() => {
    console.log(user);
  }, [user]);

  return (
    <>
      <h1>Hello</h1>
    </>
  );
};

export default React.memo(TestComponent);
