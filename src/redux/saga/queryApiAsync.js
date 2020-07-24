import { put, call } from 'redux-saga/effects';
import * as axios from 'axios';

function* queryApiAsync({ route, actionSuccessed, actionUpdate, method, data = {}, id, params }) {
  try {
    let response;

    const URL = ``;
    if (params) {
      Object.assign(data, { params });
    }
    // console.group(route);
    // console.dir(actionSuccessed);
    // console.dir(actionUpdate);
    // console.log('method', method);
    // console.log('data', data);
    // console.log('id', id);
    // console.log('params', params);
    // console.groupEnd();
    switch (method) {
      case 'post':
        response = yield call(() => axios.post(`${URL}/api/${route}`, data));
        break;

      case 'delete':
        response = yield call(() => axios.delete(`${URL}/api/${route}/${id || ''}`, data));
        break;

      case 'put':
        response = yield call(() => axios.put(`${URL}/api/${route}${id ? `/${id}` : ''}`, data));

        break;

      default:
        response = yield call(() => axios.get(`${URL}/api/${route}/${id || ''}`, data));
        break;
    }

    if (actionUpdate) {
      yield put(actionUpdate());
    }

    if (actionSuccessed) {
      yield put(actionSuccessed(response.data));
    }

    return response;
  } catch (error) {
    console.error(error.message);
  }
}

export default queryApiAsync;
