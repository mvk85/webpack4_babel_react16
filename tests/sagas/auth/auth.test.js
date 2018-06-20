import { call, put } from 'redux-saga/effects';
import { authUserWorker } from '../../../src/sagas/auth';
import { getToken } from '../../../src/api/requests';
import { loginFailure, loginSuccess } from '../../../src/actions/auth';

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
  })
});