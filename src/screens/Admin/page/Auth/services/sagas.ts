import { call, put, takeLatest } from 'redux-saga/effects';
import actions from './actions';
import { IApiLoginBody, IApiLoginResDataUser } from './types/login';
import { ISagaFunc } from '../../../../../service/actionConfigs';
import apis from './apis'

const login: ISagaFunc<IApiLoginBody> = function* ({ payload }) {
  const body = payload;
  try {
    const res = yield call(apis.login, body);
    const resData = res?.data?.data as (IApiLoginResDataUser | null);

    yield put(actions.login.success(resData));


  } catch (error) {
    yield put(actions.login.fail({}));
  }
};

export default function* authServiceSaga() {
  yield takeLatest(actions.login.fetch, login);
}
