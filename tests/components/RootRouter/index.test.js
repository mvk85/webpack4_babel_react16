import React from 'react';
import { MemoryRouter, Switch, Route } from 'react-router-dom';
import RootRouter from '../../../src/components/RootRouter';
import LoginMain from '../../../src/components/LoginMain';
import PrivateRoute from '../../../src/components/PrivateRoute';
import App from '../../../src/components/App';

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
    test('PrivateRoute not exist', () => {
      expect(wrapper.find(PrivateRoute).exists()).toBeFalsy();
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
    const wrapperMount = mount(
      <MemoryRouter initialEntries={['/currency/btn']}>
        <RootRouter />
      </MemoryRouter>
    );

    test('Switch exist', () => {
      expect(wrapperMount.find(Switch).exists()).toBeTruthy();
    });
    test('PrivateRoute exist', () => {
      expect(wrapperMount.find(PrivateRoute).exists()).toBeTruthy();
    });
    test('PrivateRoute path="*" & pathname ==="/currency/btn"', () => {
      const component = wrapperMount.findWhere(cmpt => (
        cmpt.props().path ==='*'
          && cmpt.props().location.pathname ==='/currency/btn'
          && cmpt.props().component === App
        )
      );

      expect(component.exists()).toBeTruthy();
    });
  })
});