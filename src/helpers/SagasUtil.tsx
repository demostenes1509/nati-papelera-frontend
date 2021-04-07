import { call, put } from 'redux-saga/effects';
import { FetchActions } from '../types/ActionsTypes';
import { ApiFetch } from '../types/ApiTypes';
import { AxiosResponse } from 'axios';

export function* defaultFetch<P>(actions: FetchActions<P>, api: ApiFetch<P>, path?: string) {
  try {
    yield put(actions.fetchLoading());
    const response: AxiosResponse<P> = yield call(() => api.fetch(path));

    if (response.status === 200) {
      yield put(actions.fetchSuccess(response.data));
    } else {
      yield put(actions.fetchError('meter el error aca de alguna manera'));
    }
  } catch (err) {
    yield put(actions.fetchError(err));
  }
}
