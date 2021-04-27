import {configureStore, combineReducers} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {watcherUserSaga} from "./sagas/userSaga";
import userSlice from "./ducks/user";
import {watcherDeviceSaga} from "./sagas/deviceSaga";
import deviceSlice from "./ducks/device";

const reducer = combineReducers({user: userSlice, device: deviceSlice});

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({reducer: reducer, middleware: [sagaMiddleware]});

sagaMiddleware.run(watcherUserSaga)
sagaMiddleware.run(watcherDeviceSaga)

export default store;