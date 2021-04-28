import React from 'react';
import {CircularProgress, Grid, Typography} from "@material-ui/core";
import {useSelector} from "react-redux";
import {makeStyles} from "@material-ui/core/styles";
import AddService from "./AddService";
import Service from "./Service";

const useStyles = makeStyles(theme=>({

    root: {


    },




}))

function ServicesList(props) {

    const classes = useStyles();

    const servicesAndPolicies = useSelector(state => state.service);
    const services = servicesAndPolicies.service_scoped_list


    if (!services)
        return (<div style={{margin:"auto", textAlign: "center"}}>
            <Typography variant={"h6"}>Fetching services...</Typography>
            <CircularProgress style={{marginTop: 10}}/>
        </div>);


    let servicesToDisplay = services.slice()
    servicesToDisplay.sort((t1,t2)=>{
        if (t1.service_name < t2.service_name) {
            return -1;
        }
        if (t1.service_name > t2.service_name) {
            return 1;
        }
        return 0;
    })

    return <Grid container spacing={2} className={classes.root}>

        <Grid item sm={12} md={4}>
            <AddService/>
        </Grid>
        {servicesToDisplay.map((service, index) => (
            <Grid key={index} item sm={12} md={4}>
                <Service id={service.service_name} name={service.service_name} setPolicies={service.scope_list.length}/>
            </Grid>
        ))}


    </Grid>

}

export default ServicesList;