import {call, put} from "redux-saga/effects";
import {requestGetDevicesAndPolicies, requestRegisterNewDevicesAndPolicies} from "../requests/device";
import {setDevicesAndPolicies, setStatus} from "../../ducks/device";

export function* handleGetDevicesAndPolicies(action){


    try {

        yield put(setStatus({loading:true}))

        const response = yield call(requestGetDevicesAndPolicies);
        const {data} = response;
        console.log(data)

        yield put(setDevicesAndPolicies(data))
        yield put(setStatus({loading:false, error: false}))


    }catch (error) {
        console.log(error);

        if (error){
            yield put(setStatus({loading:false, error: true, statusText: error.message + " - Reason: " + error.response.data.detail }))
        }
        else
            yield put(setStatus({loading:false, error: true, statusText: "An error has occurred!"}))



    }

}


export function* handleRegisterNewDevicesAndPolicies(action){


    const {policies} = action.payload;


    try {

        yield put(setStatus({loading:true}))

        const response = yield call(requestRegisterNewDevicesAndPolicies, policies);
        const {data} = response;

        yield put(setDevicesAndPolicies({device_policy_list: policies}))
        yield put(setStatus({loading:false, error: false, statusText: "Action performed correctly!"}))

    }catch (error) {
        console.log(error);
        if (error){
            yield put(setStatus({loading:false, error: true, statusText: error.message + " - Reason: " + error.response.data.detail }))
        }
        else
            yield put(setStatus({loading:false, error: true, statusText: "An error has occurred!"}))


    }

}