import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer, { act } from 'react-test-renderer';
import toJson from 'enzyme-to-json';

import Switch from '../Switch';

Enzyme.configure({ adapter: new Adapter() });

describe('<Switch />', () => {
  /** initialize component */
  const mockFn = jest.fn();
  const initialProps = { size: 15, text: 'Мои заявки', id: 1, onClick: mockFn };
  const jsxComponent = (
    <Switch
      id={initialProps.id}
      text={initialProps.text}
      onClick={initialProps.onClick}
      size={initialProps.size}
    />
  );

  const wrapper = shallow(jsxComponent);
  const component = mount(jsxComponent);
  const input = wrapper.find('.switch__input');
  const span = wrapper.find('.switch__text');

  /** tests */
  it('should be defined', () => {
    expect(Switch).toBeDefined();
  });
  it('render success', () => {
    expect(toJson(wrapper)).toMatchSnapshot();
  });
  it('should have a input id', () => {
    expect(typeof component.props().id).toBe('number');
    expect(component.props().id).not.toBeUndefined();
    expect(input.props().id).toEqual(initialProps.id);
    expect(input.props().type).toEqual('checkbox');
  });
  it('it text component is visible', () => {
    expect(span.props().children).toEqual(initialProps.text);
  });
  it('checkbox changes his value on the click', () => {
    const component = renderer.create(jsxComponent);
    const instance = component.root;
    const input = instance.findByType('input');

    expect(input.props.checked).toEqual(false);
    act(() => input.props.onChange());
    expect(input.props.checked).toEqual(true);
  });
  it('should have a click function', () => {
    wrapper.find('input[type="checkbox"]').simulate('change');
    expect(mockFn).toHaveBeenCalled();
  });
});
