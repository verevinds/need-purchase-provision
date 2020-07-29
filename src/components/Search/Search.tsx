import { faSearch } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import * as React from 'react';
import './Search.scss';

export interface ISearch {
  placeholder?: string;
  width?: string | number;
}

const Search: React.FC<ISearch> = ({ placeholder, width = 150 }) => {
  return (
    <>
      <div className='search'>
        <div className='search__icon'>
          <FontAwesomeIcon icon={faSearch} size='xs' />
        </div>
        <input
          type='text'
          placeholder={placeholder}
          className='search__input'
          style={{ width: `${width}px` }}
        />
      </div>
    </>
  );
};

export default React.memo(Search);
