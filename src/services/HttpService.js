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
import axios from "axios";
import UserService from "./UserService";

const HttpMethods = {
    GET: 'GET',
    POST: 'POST',
    PUT: 'PUT',
    DELETE: 'DELETE',
};

const _axios = axios.create();

const configure = () => {
    _axios.interceptors.request.use((config) => {
        if (UserService.isLoggedIn()) {
            const cb = () => {
                config.headers.Authorization = `Bearer ${UserService.getToken()}`;
                return Promise.resolve(config);
            };
            return UserService.updateToken(cb);
        }
    });
};

const getAxiosClient = () => _axios;

const HttpService = {
    HttpMethods,
    configure,
    getAxiosClient,
};

export default HttpService;