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
    yield put(actions.fetchError(err));
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
    if (err.response && err.response.data) {
      yield put(actions.postError(err.response.data.server_error));
    } else {
      yield put(actions.postError(err));
    }
  }
}

export function* defaultPut(actions, api, request) {
  try {
    yield put(actions.putWaiting());
    const response = yield call(() => api.put(request));

    if ([200, 201].includes(response.status)) {
      yield put(actions.putSuccess(response.data));
    } else {
      yield put(actions.putError(response));
    }
  } catch (err) {
    if (err.response && err.response.data) {
      yield put(actions.putError(err.response.data.server_error));
    } else {
      yield put(actions.putError(err));
    }
  }
}
