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
import Keycloak from "keycloak-js";
import {AUTH_ENDPOINT, CLIENT_ID, REALM_NAME, REDIRECT_URI} from "../utils/config";

const _kc = new Keycloak({
    realm: REALM_NAME,
    url: AUTH_ENDPOINT,
    clientId: CLIENT_ID});


const initKeycloak = (onAuthenticatedCallback) => {
    _kc.init({
        onLoad: 'check-sso',
        redirectUri: REDIRECT_URI

    }).then(function (authenticated) {

        onAuthenticatedCallback()
        if (authenticated) {
            console.log('authenticated');
            console.log(_kc.token)
        } else {
            console.log('not authenticated');
        }
    }).catch(function () {
        alert('failed to initialize');
        onAuthenticatedCallback()

    });
};

const doLogin = _kc.login;

const doLogout = _kc.logout;

const getToken = () => _kc.token;

const isLoggedIn = () => !!_kc.token;

const updateToken = (successCallback) =>
    _kc.updateToken(5)
        .then(successCallback)
        .catch(doLogin);

const getUsername = () => _kc.tokenParsed?.preferred_username;

const hasRole = (roles) => roles.some((role) => _kc.hasRealmRole(role));


const UserService = {
    initKeycloak,
    doLogin,
    doLogout,
    isLoggedIn,
    getToken,
    updateToken,
    getUsername,
    hasRole,
};

export default UserService;