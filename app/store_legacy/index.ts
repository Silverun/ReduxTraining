import {
  legacy_createStore as createStore,
  combineReducers,
  applyMiddleware,
} from 'redux';
import {authReducer} from './auth/reducers';
import logger from './middleware/logger';
import {thunk} from 'redux-thunk';
import {itemsReducer} from './items/reducers';
import createSagaMiddleware from 'redux-saga';
import {rootSagaWatcher} from '../sagas';
import {cartReducer} from './cart/reducers';

export type AppState = ReturnType<typeof rootReducer>;
export type AppDispatch = typeof store.dispatch;
export type AppActionsType = Parameters<typeof rootReducer>[1];

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemsReducer,
  cart: cartReducer,
});

const store = createStore(
  rootReducer,
  applyMiddleware(logger, thunk, sagaMiddleware),
);

sagaMiddleware.run(rootSagaWatcher);

export default store;
