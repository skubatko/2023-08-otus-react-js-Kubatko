import { configureStore } from '@reduxjs/toolkit';
import createSagaMiddleware from 'redux-saga';
import { basket } from './basket';
import { initialized } from './initialized';
import { profile } from './profile';
import rootSaga from './sagas';
import { token } from './token';

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    initialized,
    token,
    profile,
    basket,
  },
  middleware: (getDefaultMiddleware) => getDefaultMiddleware().concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);

export type RootState = ReturnType<typeof store.getState>;
