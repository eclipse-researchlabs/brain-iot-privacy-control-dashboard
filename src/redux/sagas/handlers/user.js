import history from "../../../history";
import UserService from "../../../services/UserService";


export function* handleLogout(action){

    try {
        UserService.doLogout({
            redirectUri: "http://localhost:3000/login"
        })
        history.push("/login")

    }catch (error) {
        console.log(error);


    }
}




export function* handleLoginKeycloak(action){

    console.log("HANDLING LOGIN KEYCLOAK")

    try {
        if (!UserService.isLoggedIn())
            UserService.doLogin({
                redirectUri: "http://localhost:3000/login"
            })

    }catch (error) {
        console.log(error);


    }



}