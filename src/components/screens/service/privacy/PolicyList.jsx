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
import {makeStyles} from "@material-ui/core/styles";
import {
    List,
    ListSubheader,
    Paper,
} from "@material-ui/core";

import PolicyItem from "./PolicyItem";

const useStyles = makeStyles(theme=>({

   root: {
       height: "100%",
   }

}))



function PolicyList(props){

    const classes = useStyles();

    return <Paper elevation={2} className={classes.root}>
        <List subheader={<ListSubheader disableSticky={true}>Available policies</ListSubheader>}>
            {props.available_policy.map((policy, index)=>(
                <PolicyItem key={index} policy_name={policy} handleToggle={props.handleToggle} checked={props.set_policies.includes(policy)}/>))}

        </List>
    </Paper>

}

export default PolicyList;