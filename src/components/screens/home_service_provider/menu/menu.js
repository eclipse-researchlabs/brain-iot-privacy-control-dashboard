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
import React from "react";
import SettingsIcon from "@material-ui/icons/Settings";
import ExtensionIcon from '@material-ui/icons/Extension';
export const menu = [
    {
        id: 0,
        name: 'Services',
        icon: <ExtensionIcon/>,
        url: "/home"

    }, {
        id: 1,
        name: 'Settings',
        icon: <SettingsIcon/>,
        url: "/home/device_id"

    }


]
