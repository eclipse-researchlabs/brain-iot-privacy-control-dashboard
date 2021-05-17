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
import React from 'react'
import {Grid, Typography} from "@material-ui/core";
import {makeStyles} from "@material-ui/styles";
import ServicesList from "./ServicesList";


const useStyles = makeStyles(theme=>({

    root:{

        padding: 60,
        height: "100%"


    },
    title: {

        fontWeight: 600,
        color: theme.palette.primary.main

    },

    deviceList:{

        marginTop: 40,


    }
}));

function ServicesPage(props){

    const classes = useStyles();


    return <Grid container className={classes.root} alignContent={"flex-start"}>
        <Grid item sm={12}>
            <Typography variant="h4" className={classes.title}>My services</Typography></Grid>
        <Grid item sm={12} className={classes.deviceList}>
            <ServicesList/>
        </Grid>

    </Grid>

}

export default ServicesPage;