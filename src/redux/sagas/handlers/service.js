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
import {call, put} from "redux-saga/effects";
import {
    addServiceAndPoliciesState, modifyServiceAndPoliciesState,
    removeServiceState,
    setServicesAndPoliciesState,
    setStatus
} from "../../ducks/service";
import {
    requestGetServicesAndPolicies,
    requestRegisterNewServicesAndPolicies,
    requestRemoveService, requestUpdateServiceAndPolicies
} from "../requests/service";


export function* handleGetServicesAndPolicies(action){


    try {

        yield put(setStatus({loading:true}))

        const response = yield call(requestGetServicesAndPolicies);
        const {data} = response;

        yield put(setServicesAndPoliciesState(data))
        yield put(setStatus({loading:false, error: false}))


    }catch (error) {
        console.log(error);

        if (error && error.response){
            yield put(setStatus({loading:false, error: true, statusText: error.message + " - Reason: " + error.response.data.detail }))
        }
        else
            yield put(setStatus({loading:false, error: true, statusText: "An error has occurred!"}))

    }

}


export function* handleRegisterNewServicesAndPolicies(action){


    const {name, resource_scopes} = action.payload;

    try {

        yield put(setStatus({loading:true}))

        yield call(requestRegisterNewServicesAndPolicies, name, resource_scopes);

        yield put(addServiceAndPoliciesState({name: name, resource_scopes: resource_scopes}))
        yield put(setStatus({loading:false, error: false, statusText: "Action performed correctly!"}))

    }catch (error) {
        console.log(error);
        if (error && error.response){
            yield put(setStatus({loading:false, error: true, statusText: error.message + " - Reason: " + error.response.data.detail }))
        }
        else
            yield put(setStatus({loading:false, error: true, statusText: "An error has occurred!"}))
    }
}

export function* handleUpdateServiceAndPolicies(action){


    const {name, resource_scopes} = action.payload;

    try {

        yield put(setStatus({loading:true}))

        yield call(requestUpdateServiceAndPolicies, name, resource_scopes);

        yield put(modifyServiceAndPoliciesState({name: name,resource_scopes: resource_scopes}))
        yield put(setStatus({loading:false, error: false, statusText: "Action performed correctly!"}))

    }catch (error) {
        console.log(error);
        if (error && error.response){
            yield put(setStatus({loading:false, error: true, statusText: error.message + " - Reason: " + error.response.data.detail }))
        }
        else
            yield put(setStatus({loading:false, error: true, statusText: "An error has occurred!"}))
    }

}

export function* handleRemoveService(action){

    const {service_id} = action.payload;

    try {

        yield put(setStatus({loading:true}))

        yield call(requestRemoveService, service_id);

        yield put(removeServiceState({name: service_id}))
        yield put(setStatus({loading:false, error: false, statusText: "Action performed correctly!"}))

    }catch (error) {
        console.log(error);
        if (error && error.response){
            yield put(setStatus({loading:false, error: true, statusText: error.message + " - Reason: " + error.response.data.detail }))
        }
        else
            yield put(setStatus({loading:false, error: true, statusText: "An error has occurred!"}))
    }


}