import {
    BACKEND_ENDPOINT,
} from "../../../utils/config";
import HttpService from "../../../services/HttpService";
import UserService from "../../../services/UserService";


export function requestGetServicesAndPolicies(){

    const url = BACKEND_ENDPOINT + "/api/v1/brain_consumers/service";
    return HttpService.getAxiosClient().get(url);


}


export function requestRegisterNewServicesAndPolicies(name, scope_list){

    const url = BACKEND_ENDPOINT + "/api/v1/brain_consumers/service";
    const params =
        {
            "name": name,
            "scope_list": scope_list
        }

    return HttpService.getAxiosClient().post(url, params)
}


