import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer, { act } from 'react-test-renderer';
import toJson from 'enzyme-to-json';

Enzyme.configure({ adapter: new Adapter() });

import Search from '../Search';

describe('<Search />', () => {
  const initialProps = { placeholder: 'номера потребностей', width: 100 };
  const jsxComponent = <Search placeholder={initialProps.placeholder} />;
  const wrapper = shallow(jsxComponent);
  const component = mount(jsxComponent);
  const input = wrapper.find('.search__input');
  const icon = component.find('.search__icon');

  /** tests */
  it('should be defined', () => {
    expect(Search).toBeDefined();
  });
  it('render success', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('the icon component must have an icon', () => {
    expect(typeof icon.props().children.props.icon).toEqual('object');
  });
  it('should have a input style width', () => {
    expect(input.props().style.width).not.toBeUndefined();
  });
  it('should have a input type the text', () => {
    expect(input.props().type).toEqual('text');
  });
});
