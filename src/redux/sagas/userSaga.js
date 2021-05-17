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
import {all, takeLatest} from 'redux-saga/effects';
import {doLoginKeycloak, doLogout} from "../ducks/user";
import {handleLoginKeycloak, handleLogout} from "./handlers/user";




function* watchLogoutUser(){
    yield takeLatest(doLogout.type, handleLogout)

}

function* watchLoginUserKeycloak(){
    yield takeLatest(doLoginKeycloak.type, handleLoginKeycloak)
}


export function* watcherUserSaga(){
    yield all([
        watchLoginUserKeycloak(),
        watchLogoutUser()
    ])
}