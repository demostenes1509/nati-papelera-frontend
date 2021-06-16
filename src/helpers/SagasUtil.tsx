import { call, put } from 'redux-saga/effects';

export function* defaultFetch(actions, api, data = null) {
  try {
    yield put(actions.fetchLoading());
    const response = yield call(() => api.fetch(data));

    if (response.status === 200) {
      yield put(actions.fetchSuccess(response.data));
    } else {
      yield put(actions.fetchError(response));
    }
  } catch (err) {
    const message = (err.response && err.response.data) || err.message;
    yield put(actions.fetchError(message));
  }
}

export function* defaultPost(actions, api, request) {
  try {
    yield put(actions.postWaiting());
    const response = yield call(() => api.post(request));

    if ([200, 201].includes(response.status)) {
      yield put(actions.postSuccess(response.data));
    } else {
      yield put(actions.postError(response));
    }
  } catch (err) {
    const message = (err.response && err.response.data) || err.message;
    yield put(actions.postError(message));
  }
}

export function* defaultPut(actions, api, request) {
  try {
    yield put(actions.putWaiting());
    const response = yield call(() => api.put(request));

    if ([200, 204].includes(response.status)) {
      yield put(actions.putSuccess(response.data));
    } else {
      yield put(actions.putError(response));
    }
  } catch (err) {
    const message = (err.response && err.response.data) || err.message;
    yield put(actions.putError(message));
  }
}
