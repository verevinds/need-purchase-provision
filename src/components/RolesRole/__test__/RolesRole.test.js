import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer, { act } from 'react-test-renderer';
import toJson from 'enzyme-to-json';

import RolesRole from '../RolesRole';

Enzyme.configure({ adapter: new Adapter() });

describe('<RolesRole />', () => {
  it('should be defined', () => {
    expect(RolesRole).toBeDefined();
  });
});
