import {all} from 'redux-saga/effects';
import {itemsWatcher} from './itemsSagas';

export function* rootSagaWatcher() {
  yield all([itemsWatcher()]);
}
