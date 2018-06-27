import { call, put } from 'redux-saga/effects';
import { authUserWorker, registrationUserWorker } from '../../../src/sagas/auth';
import { getToken, registration } from '../../../src/api/requests';
import { loginFailure, loginSuccess, registrationFailure, registrationSuccess } from '../../../src/actions/auth';

describe('sagas auth', () => {
  describe('authUserWorker', () => {
    describe('success', () => {
      const action = {
        payload: {
          data: {
            jwt: '123'
          },
          message: 'error'
        }
      };
      const saga = authUserWorker(action);

      test('getToken', () => {
        expect(saga.next().value).toEqual(call(getToken, action.payload));
      });
      test('loginSuccess', () => {
        expect(saga.next(action.payload).value).toEqual(put(loginSuccess(action.payload.data.jwt)))
      })
    });
    describe('failure', () => {
      const action = {};
      const saga = authUserWorker(action);
      const error = new Error();
      const textError = 'test';
      error.data = { message: textError };

      saga.next();

      test('getToken', () => {
        expect(saga.throw(error).value).toEqual(put(loginFailure(textError)))
      });
    })
  });
  describe('registrationUserWorker', () => {
    describe('success', () => {
      const action = {
        payload: {
          data: {
            jwt: '123'
          },
          message: 'error'
        }
      };
      const saga = registrationUserWorker(action);

      test('registration', () => {
        expect(saga.next().value).toEqual(call(registration, action.payload));
      });
      test('registrationSuccess', () => {
        expect(saga.next(action.payload).value).toEqual(put(registrationSuccess(action.payload.data.jwt)))
      })
    });
    describe('failure', () => {
      const action = {};
      const saga = registrationUserWorker(action);
      const error = new Error();
      const textError = 'test';
      error.data = { message: {error: textError} };

      saga.next();

      test('registration', () => {
        expect(saga.throw(error).value).toEqual(put(registrationFailure(`error: ${textError}`)))
      });
    })
  })
});