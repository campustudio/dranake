import { all, fork } from 'redux-saga/effects';

// import watchGetUsersSaga from './watchers/user';

export default function* root() {
  yield all([
    // fork(watchGetUsersSaga),
  ]);
}
