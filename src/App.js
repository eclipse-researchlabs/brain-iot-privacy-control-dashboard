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
import HomePage from './components/screens/home/HomePage'
import LoginPage from './components/screens/login/LoginPage'
import {
    Redirect, Switch, Router,
} from "react-router-dom";
import React from "react";
import PrivateRoute from "./components/utils/PrivateRoute";
import LoginRoute from "./components/utils/LoginRoute";
import history from "./history";
import UserService from "./services/UserService";
import HomePageServiceProvider from "./components/screens/home_service_provider/HomePageServiceProvider";


function App() {


    return (
        <Router history={history}>
            <Switch>
                <LoginRoute path="/login" exact component={LoginPage}>
                </LoginRoute>
                <PrivateRoute path="/home" exact component={UserService.hasRole(['brain_consumers']) ? HomePageServiceProvider : HomePage}>
                </PrivateRoute>
                <PrivateRoute path="/home/device/:device_id" component={UserService.hasRole(['brain_consumers'])  ? HomePageServiceProvider : HomePage}>
                </PrivateRoute>
                <PrivateRoute path="/home/service/:service_name" component={UserService.hasRole(['brain_consumers'])  ? HomePageServiceProvider : HomePage}>
                </PrivateRoute>
                <Redirect from="/**" to="/login"/>
            </Switch>
        </Router>
    );
}

export default App;
