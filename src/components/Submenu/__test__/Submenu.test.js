import React from 'react';
import { shallow, configure } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';

configure({ adapter: new Adapter() });

import Submenu from '../Submenu';

describe('<Submenu />', () => {
  /** initialize component */
  const initialProps = [
    { name: 'Статистика', url: '/main', link: 'statistics' },
    { name: 'Подписка на заказы', url: '/main', link: 'subscription-to-orders' },
    { name: 'О системе', url: '/main', link: 'about' },
    { name: 'Руководство оператора', url: '/main', link: 'operator-manual' },
  ];

  const jsxComponent = <Submenu linksList={initialProps} />;
  const wrapper = shallow(jsxComponent);

  /** tests */
  it('should be defined', () => {
    expect(Submenu).toBeDefined();
  });
  it('render success', () => {
    expect(wrapper.debug()).toMatchSnapshot();
  });
});
