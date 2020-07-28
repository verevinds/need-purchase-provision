import { put, call } from 'redux-saga/effects';
import axios from 'axios';

function* queryApiAsync({ route, actionSuccessed, actionUpdate, method, data = {}, id, params }) {
  try {
    let response;

    const URL = `http://192.168.213.51:8080`;
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
      // fetch("http://srv-sdesk.c31.nccp.ru:8080/api/users/", {
      //   "headers": {
      //     "accept": "*/*",
      //     "accept-language": "ru-RU,ru;q=0.9,en-US;q=0.8,en;q=0.7",
      //     "if-none-match": "W/\"72c28-j/y1USBZ/6xjcvptDe3iu2pu7Z0\""
      //   },
      //   "referrer": "http://localhost:4200/",
      //   "referrerPolicy": "no-referrer-when-downgrade",
      //   "body": null,
      //   "method": "GET",
      //   "mode": "cors",
      //   "credentials": "omit"
      // });
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
