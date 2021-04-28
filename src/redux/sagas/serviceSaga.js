import {all, takeLatest} from 'redux-saga/effects';
import {handleGetServicesAndPolicies, handleRegisterNewServicesAndPolicies} from "./handlers/service";
import {getServicesAndPolicies, registerNewServicesAndPolicies} from "../ducks/service";


function* watchGetServices(){
    yield takeLatest(getServicesAndPolicies.type, handleGetServicesAndPolicies)

}


function* watchRegisterNewServices(){
    yield takeLatest(registerNewServicesAndPolicies.type, handleRegisterNewServicesAndPolicies)
}

export function* watcherServiceSaga(){
    yield all([
        watchGetServices(),
        watchRegisterNewServices()
    ])
}