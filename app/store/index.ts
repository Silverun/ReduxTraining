import {combineReducers, applyMiddleware} from 'redux';
import logger from './middleware/logger';
import {thunk} from 'redux-thunk';
import createSagaMiddleware from 'redux-saga';
import {rootSagaWatcher} from '../sagas';
import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './auth/authSlice';
import {itemsReducer} from './items/itemsSlice';

export type AppState = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store;
export type AppDispatch = AppStoreType['dispatch'];
export type AppActionsType = Parameters<typeof rootReducer>[1];

const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemsReducer,
  // cart: cartReducer,
});

const store = configureStore({reducer: rootReducer});

// const store = createStore(
//   rootReducer,
//   applyMiddleware(logger, thunk, sagaMiddleware),
// );

// sagaMiddleware.run(rootSagaWatcher);

export default store;
