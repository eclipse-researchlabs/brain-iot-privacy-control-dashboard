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
import React from 'react';
import {ListItem, ListItemIcon, ListItemText} from "@material-ui/core";

import {makeStyles} from "@material-ui/styles";
import Typography from "@material-ui/core/Typography";

const useStyles = makeStyles(theme=>({

    root: {
        "&$rootSelected":{
            backgroundColor:theme.palette.primary.main,

        },
        "&$rootSelected:hover":{
            backgroundColor: theme.palette.primary.main
        }
    },
    rootSelected:{},
    text: {
        color: theme.palette.text.primary,
        fontSize: 14,
        fontWeight: 500,
        textAlign: "right"


    },
    icon: {
        color: theme.palette.primary.main
    },

    textSelected:{
        color:"white",
        fontSize: 14,
        fontWeight: 500,
        textAlign: "right"


    },
    iconSelected:{
        color:"white"
    },


}))






function MenuItem(props){

    const classes = useStyles();

    return <ListItem button
                     disabled={props.item.id !== 0}
                     classes={{root: classes.root, selected: classes.rootSelected}}
                     selected={props.selected}
                     onClick={()=>props.clickHandler(props.item.id)}>
        <ListItemIcon
            className={!props.selected ? classes.icon : classes.iconSelected}>{props.item.icon}</ListItemIcon>
        <ListItemText>
            <Typography
                className={!props.selected ? classes.text : classes.textSelected}>
                {props.item.name}</Typography></ListItemText>
    </ListItem>

}

export default MenuItem;