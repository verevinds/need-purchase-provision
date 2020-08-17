import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer, { act } from 'react-test-renderer';
import toJson from 'enzyme-to-json';
import user from '../../../json/users.json';
import RolesRoleDrop from '../RolesRoleDrop';

Enzyme.configure({ adapter: new Adapter() });

// {
//   allegedUsers?: TUser[];
//   handleChoose: (id: number) => void;
//   text: string;
// }

describe('<RolesRoleDrop />', () => {
  const initialProps = {
    allegedUsers: user,
  };
  it('should be defined', () => {
    expect(RolesRoleDrop).toBeDefined();
  });
});
