import {createSlice} from "@reduxjs/toolkit";

const deviceSlice = createSlice({
    name: 'device',
    initialState: {
        available_policy: undefined,
        device_policy_list: undefined,
        loading: false,
        error: false,
        statusText: ""
        },
    reducers: {
        getDevicesAndPolicies(state, action){},
        setDevicesAndPolicies(state,action){

            const result = action.payload;
            console.log(result)
            return {...state, ...result}
        },
        getDevice(state, action){},
        addDevice(state,action){},
        removeDevice(state, action){},
        registerNewDevicesAndPolicies(state,action){},
        setStatus(state, action){
            return {...state, ...action.payload}
        }
    },
})

export const {getDevicesAndPolicies, getDevice, addDevice, removeDevice, setPolicies, registerNewDevicesAndPolicies, setDevicesAndPolicies, setStatus} = deviceSlice.actions;
export default deviceSlice.reducer;