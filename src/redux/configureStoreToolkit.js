/*
:author: Sergio Micalizzi
*******************************************************************************
* Copyright (C) 2021 LINKS Foundation
*
* This program and the accompanying materials are made
* available under the terms of the Eclipse Public License 2.0
* which is available at https://www.eclipse.org/legal/epl-2.0/
*
* SPDX-License-Identifier: EPL-2.0
******************************************************************************
*/
import {configureStore, combineReducers} from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";
import {watcherUserSaga} from "./sagas/userSaga";
import userSlice from "./ducks/user";
import {watcherDeviceSaga} from "./sagas/deviceSaga";
import deviceSlice from "./ducks/device";
import {watcherServiceSaga} from "./sagas/serviceSaga";
import serviceSlice from "./ducks/service";

const reducer = combineReducers({user: userSlice, device: deviceSlice, service: serviceSlice});

const sagaMiddleware = createSagaMiddleware();


const store = configureStore({reducer: reducer, middleware: [sagaMiddleware]});

sagaMiddleware.run(watcherUserSaga)
sagaMiddleware.run(watcherDeviceSaga)
sagaMiddleware.run(watcherServiceSaga)

export default store;