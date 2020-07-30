import * as React from 'react';
import './Filter.scss';

interface IFilter {
  children?: React.ReactNode;
}
const Filter: React.FC<IFilter> = (props) => {
  const { children } = props;

  return (
    <div className='filter'>
      <div className='filter__panel'>{children}</div>
    </div>
  );
};

export default React.memo(Filter);
