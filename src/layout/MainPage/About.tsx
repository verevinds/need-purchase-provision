import * as React from 'react';
import './About.scss';
import History from '../../components/History/History';
import Roles from '../../components/Roles/Roles';

const About: React.FC = () => {
  return (
    <div className='about'>
      <Roles />
      <History />
    </div>
  );
};

export default React.memo(About);
