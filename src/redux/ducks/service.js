import {createSlice} from "@reduxjs/toolkit";

const serviceSlice = createSlice({
    name: 'service',
    initialState: {
        service_scoped_list: undefined,
        loading: false,
        error: false,
        statusText: ""
    },
    reducers: {
        getServicesAndPolicies(state, action){},
        setServicesAndPolicies(state,action){

            const result = action.payload;
            return {...state, ...result}
        },
        getService(state, action){},
        addService(state,action){},
        removeService(state, action){},
        registerNewServicesAndPolicies(state,action){},
        setStatus(state, action){
            return {...state, ...action.payload}
        }
    },
})

export const {getServicesAndPolicies, setServicesAndPolicies, getService, addService, removeService, registerNewServicesAndPolicies, setStatus} = serviceSlice.actions;
export default serviceSlice.reducer;