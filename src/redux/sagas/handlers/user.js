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
import history from "../../../history";
import UserService from "../../../services/UserService";
import {REDIRECT_URI} from "../../../utils/config";


export function handleLogout(action){

    try {
        UserService.doLogout({
            redirectUri: REDIRECT_URI
        })
        history.push("/login")

    }catch (error) {
        console.log(error);


    }
}




export function handleLoginKeycloak(action){

    console.log("HANDLING LOGIN KEYCLOAK")

    try {
        if (!UserService.isLoggedIn())
            UserService.doLogin({
                redirectUri: REDIRECT_URI
            })

    }catch (error) {
        console.log(error);


    }



}