import {call, put} from "redux-saga/effects";
import {setServicesAndPolicies, setStatus} from "../../ducks/service";
import {requestGetServicesAndPolicies, requestRegisterNewServicesAndPolicies} from "../requests/service";


export function* handleGetServicesAndPolicies(action){


    try {

        yield put(setStatus({loading:true}))

        const response = yield call(requestGetServicesAndPolicies);
        const {data} = response;
        console.log(data)

        yield put(setServicesAndPolicies(data))
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


export function* handleRegisterNewServicesAndPolicies(action){


    const {name, scope_list} = action.payload;


    try {

        yield put(setStatus({loading:true}))

        const response = yield call(requestRegisterNewServicesAndPolicies, name, scope_list);
        const {data} = response;

        yield put(setServicesAndPolicies({name: name, scope_list: scope_list}))
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