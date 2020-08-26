import {createStore, applyMiddleware, compose, combineReducers} from 'redux';
import createSagaMiddleware from 'redux-saga';
import userReducer from './../Components/Login/Reducer';
import todoReducer from './../Components/Todos/Reducer';
import rootSagas from './Sagas';

import {persistStore, persistReducer} from 'redux-persist';
import storage from 'redux-persist/lib/storage';

const sagaMiddleware = createSagaMiddleware();
const rootReducers = combineReducers({
    user: userReducer,
    todos: todoReducer
});

const persistConfig = {
    key: 'root',
    storage
}

const persistedReducer = persistReducer(persistConfig,rootReducers);

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const store = createStore(persistedReducer,composeEnhancer(applyMiddleware(sagaMiddleware)));
sagaMiddleware.run(rootSagas);

const persistor = persistStore(store);

console.log(store.getState()); 

export {store,persistor};

