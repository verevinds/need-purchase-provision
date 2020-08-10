import React from 'react';
import Enzyme, { shallow, mount } from 'enzyme';
import Adapter from 'enzyme-adapter-react-16';
import toJson from 'enzyme-to-json';

import RolesRoleTag from '../RolesRoleTag';
import { AppContext } from '../../../AppContext';

Enzyme.configure({ adapter: new Adapter() });

describe('<RolesRoleTag />', () => {
  const mockFn = jest.fn();
  const initialProps = {
    handleDelete: mockFn,
    user: {
      number: 81251,
      positionId: 41675,
      departmentId: 2150,
      fired: 0,
      sex: 1,
      name1: 'Веревин',
      name2: 'Денис',
      name3: 'Сергеевич',
      phone1: '11-61',
      phone2: '',
      email: 'vds81251@c31.nccp.ru',
      exmail: '',
      computer: '',
      login: null,
      dob: '1994-05-27',
      photo: 'http://www.c31.nccp.ru/img/foto/81251.jpg',
      createdAt: '2020-07-08T04:17:31.062Z',
      updatedAt: '2020-07-08T04:17:31.062Z',
      department: {
        id: 2150,
        name: 'Лаборатория информационных технологий (ИТ)',
        parent: 2120,
        createdAt: '2020-07-08T04:09:26.067Z',
        updatedAt: '2020-07-08T04:09:26.067Z',
      },
      position: {
        id: 41675,
        name: 'Инженер-программист ',
        parent: null,
        level: 1,
        createdAt: '2020-05-21T13:32:46.669Z',
        updatedAt: '2020-07-15T04:59:08.365Z',
        responsibles: [
          {
            categoryId: null,
            departmentId: null,
            isArchive: null,
            optionId: null,
            positionId: 41675,
            propertyId: 32,
            userNumber: null,
          },
          {
            categoryId: null,
            departmentId: null,
            isArchive: null,
            optionId: null,
            positionId: 41675,
            propertyId: 33,
            userNumber: null,
          },
        ],
      },
      accesses: [
        {
          id: 72,
          userNumber: 81251,
          access: 1,
          createdAt: '2020-06-25T07:00:07.260Z',
          updatedAt: '2020-06-25T07:00:07.260Z',
        },
        {
          id: 73,
          userNumber: 81251,
          access: 999,
          createdAt: '2020-06-25T07:00:19.464Z',
          updatedAt: '2020-06-25T07:00:19.464Z',
        },
      ],
    },
  };
  const {
    user: { name1, name2, name3 },
  } = initialProps;
  const jsxComponent = (
    <RolesRoleTag handleDelete={initialProps.handleDelete} user={initialProps.user} />
  );
  const wrapper = shallow(jsxComponent);
  const component = mount(jsxComponent);
  const componentWithContext = mount(
    <AppContext.Provider value={{ roles: { isModerator: true } }}>
      {jsxComponent}
    </AppContext.Provider>,
  );
  const block = wrapper.find('.tag__text');
  const textBlock = block.props().children.join('');

  it('should be defined', () => {
    expect(RolesRoleTag).toBeDefined();
  });
  it('render success for Moderator', () => {
    expect(toJson(componentWithContext)).toMatchSnapshot();
  });

  it('render success for usually user', () => {
    expect(toJson(component)).toMatchSnapshot();
  });
  it('should have called function callback', () => {
    componentWithContext.find('FontAwesomeIcon').simulate('click');
    expect(mockFn.mock.calls.length).toEqual(1);
  });
  it('should have a full name users component in text', () => {
    expect(textBlock).toEqual(`${name1} ${name2.charAt(0)}. ${name3.charAt(0)}.`);
  });
});
