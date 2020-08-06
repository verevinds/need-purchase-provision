/* eslint-disable jsx-a11y/label-has-associated-control */
import * as React from 'react';
import './Switch.scss';

interface ISwitch {
  size?: number | string;
  id: string;
  text: string;
  checked?: boolean;
  onClick?: (check: boolean) => void;
}
const Switch: React.FC<ISwitch> = ({ size = 10, text, checked, id, onClick }) => {
  const [isCheck, setIsCheck] = React.useState(checked);

  React.useLayoutEffect(() => {
    setIsCheck(checked);
  }, [checked]);

  return (
    <div className='switch' style={{ fontSize: `${size}px` }}>
      <input
        type='checkbox'
        id={id}
        className='switch__input'
        checked={isCheck}
        onChange={() => {
          const newIsChek = !isCheck;
          setIsCheck(newIsChek);
          if (onClick) onClick(newIsChek);
        }}
      />
      <label className='switch__label' htmlFor={id} style={{ fontSize: `${size}px` }} />
      <span className='switch__text'>{text}</span>
    </div>
  );
};

export default React.memo(Switch);
