import {
    BACKEND_ENDPOINT,
} from "../../../utils/config";
import HttpService from "../../../services/HttpService";
import UserService from "../../../services/UserService";


export function requestGetServicesAndPolicies(){

    const url = BACKEND_ENDPOINT + "/api/v1/service";
    return HttpService.getAxiosClient().get(url);


}

export function requestRegisterNewServicesAndPolicies(policies){

    const url = BACKEND_ENDPOINT + "/api/v1/service";
    const user_id = UserService.getUsername();
    const params =
        {
            "user_id": UserService.getUsername(),
            "device_policy_list": policies
        }

    return HttpService.getAxiosClient().post(url, params)
}


