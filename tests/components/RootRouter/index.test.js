import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import RootRouter from '../../../src/components/RootRouter';
import LoginMain from '../../../src/components/LoginMain';

jest.mock('../../../src/components/LoginMain', () => () => 'Login main');
jest.mock('../../../src/components/App', () => () => 'App');
jest.mock('../../../src/components/PrivateRoute', () => () => 'Private Router');

describe('RootRouter', () => {
  describe('Route "/"', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/']}>
        <RootRouter />
      </MemoryRouter>
    );

    test('Switch exist', () => {
      expect(wrapper.find(Switch).exists()).toBeTruthy()
    });
    test('Router with path = "/" + exact + component = LoginMain', () => {
      const RouteComponent = wrapper.findWhere(cmpt => {
        const { component, path, exact } = cmpt.props();
        const isRoute = cmpt.name() === Route.name;
        const isLogin = component === LoginMain;
        const isRootPath = path === '/';

        return isRoute && isLogin && isRootPath && exact;
      });

      expect(RouteComponent.exists()).toBeTruthy();
    });
  });

  describe('PrivateRouter "*"', () => {
    const wrapper = mount(
      <MemoryRouter initialEntries={['/currency/btn']}>
        <RootRouter {...{isAuthorized: true }} />
      </MemoryRouter>
    );

    test('Switch exist', () => {
      expect(wrapper.find(Switch).exists()).toBeTruthy()
    });
    // test('PrivateRouter exist', () => {
    //   const PrivateRouter = wrapper.findWhere(cmpt => {
    //     console.log('name = ', cmpt.name(), cmpt.debug());
    //
    //     return true;
    //   })
    // })
  })
});