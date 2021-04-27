import {all, takeLatest} from 'redux-saga/effects';
import {handleGetDevicesAndPolicies, handleRegisterNewDevicesAndPolicies
} from "./handlers/device";
import {getDevicesAndPolicies, registerNewDevicesAndPolicies} from "../ducks/device";


function* watchGetDevicesAndPolicies(){
    yield takeLatest(getDevicesAndPolicies.type, handleGetDevicesAndPolicies)

}


function* watchRegisterNewPolicies(){
    yield takeLatest(registerNewDevicesAndPolicies.type, handleRegisterNewDevicesAndPolicies)
}

export function* watcherDeviceSaga(){
    yield all([
        watchGetDevicesAndPolicies(),
        watchRegisterNewPolicies()
    ])
}