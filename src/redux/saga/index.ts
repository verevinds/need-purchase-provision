import { takeEvery } from 'redux-saga/effects';
import constants from '../constants';

import queryApiAsync from './queryApiAsync';

function* watchFetch() {
  const { QUERY_API } = constants;

  // @ts-ignore
  yield takeEvery(QUERY_API, queryApiAsync);
}

export default watchFetch;
