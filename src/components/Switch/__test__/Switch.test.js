import React from 'react';
import Enzyme from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import renderer, { act } from 'react-test-renderer';

import Switch from '../Switch';

Enzyme.configure({ adapter: new Adapter() });

// props { size = 10, text, checked, id, onClick }
describe('<Switch />', () => {
  const component = renderer.create(<Switch id={1} text='Мои заявки' />);
  const instance = component.root;
  const input = instance.findByType('input');
  const span = instance.findByType('span');

  test('render success', () => {
    expect(component.toJSON()).toMatchSnapshot();
  });
  test('required props "id" not to be undefined', () => {
    expect(input.props.id).not.toBeUndefined();
  });
  test('it text component is visible', () => {
    expect(span.props.children).toEqual('Мои заявки');
  });
  test('checkbox changes his value on the click', () => {
    expect(input.props.checked).toEqual(false);
    act(() => input.props.onClick());
    expect(input.props.checked).toEqual(true);
  });
});
