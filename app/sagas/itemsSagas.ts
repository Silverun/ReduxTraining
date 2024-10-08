import {call, put, takeLatest} from 'redux-saga/effects';
import {Item, ItemActions} from '../store_legacy/items/types';
import {SagaIterator} from 'redux-saga';
import {getItems, getItemsFailed} from '../store_legacy/items/actions';
import {API_ENDPOINTS} from '../constants/api';

const fetchItemsFromApi = async (): Promise<Item[]> => {
  return fetch(API_ENDPOINTS.LOCAL).then(res => res.json());
};

function* fetchItemsWorker(): SagaIterator {
  try {
    const items = yield call(fetchItemsFromApi);
    yield put(getItems(items));
  } catch (e) {
    if (e instanceof Error) {
      yield put(getItemsFailed(e));
    }
  }
}

export function* itemsWatcher() {
  //takeEvery
  yield takeLatest(ItemActions.fetchItemsSaga, fetchItemsWorker);
  //more workers below
}
