/* eslint-disable @typescript-eslint/ban-ts-comment */
import { takeEvery } from 'redux-saga/effects';
import { QUERY_API } from '../constants';

import queryApiAsync from './queryApiAsync';

function* watchFetch() {
  // @ts-ignore
  yield takeEvery(QUERY_API, queryApiAsync);
}

export default watchFetch;
