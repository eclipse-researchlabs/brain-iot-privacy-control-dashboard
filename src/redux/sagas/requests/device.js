import {
    BACKEND_ENDPOINT,
} from "../../../utils/config";
import HttpService from "../../../services/HttpService";
import UserService from "../../../services/UserService";


export function requestGetDevicesAndPolicies(){

    const url = BACKEND_ENDPOINT + "/api/v1/brain_user/policy";
    return HttpService.getAxiosClient().get(url);


}

export function requestRegisterNewDevicesAndPolicies(policies){

    const url = BACKEND_ENDPOINT + "/api/v1/brain_user/policy";
    console.log(policies);
    const params = policies;
    return HttpService.getAxiosClient().post(url, params)
}


