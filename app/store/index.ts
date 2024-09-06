import {combineReducers} from 'redux';
import {configureStore} from '@reduxjs/toolkit';
import {authReducer} from './auth/authSlice';
import {itemsReducer} from './items/itemsSlice';
import logger from '../middleware/logger';
import {cartReducer} from './cart/CartSlice';
import {itemsAPI} from '../services/itemsService';
import {setupListeners} from '@reduxjs/toolkit/query';

export type AppState = ReturnType<typeof rootReducer>;
export type AppStoreType = typeof store;
export type AppDispatch = AppStoreType['dispatch'];
export type AppActionsType = Parameters<typeof rootReducer>[1];

// const sagaMiddleware = createSagaMiddleware();

const rootReducer = combineReducers({
  auth: authReducer,
  items: itemsReducer,
  cart: cartReducer,
  [itemsAPI.reducerPath]: itemsAPI.reducer,
});

const store = configureStore({
  reducer: rootReducer,
  middleware: getDefaultMiddleware =>
    getDefaultMiddleware().concat(logger).concat(itemsAPI.middleware),
});

setupListeners(store.dispatch);

// const store = createStore(
//   rootReducer,
//   applyMiddleware(logger, thunk, sagaMiddleware),
// );

// sagaMiddleware.run(rootSagaWatcher);

export default store;
