import React from 'react';
import {
    Redirect, Route,
} from "react-router-dom";
import {checkUserAuthenticated} from "../../redux/sagas/handlers/user";
import UserService from "../../services/UserService";


function PrivateRoute(props) {


    return UserService.isLoggedIn() ? <Route {...props}/> : <Redirect to='/login'/>


}

export default PrivateRoute;

