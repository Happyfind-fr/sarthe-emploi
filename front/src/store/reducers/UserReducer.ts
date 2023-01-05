import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const userSlice = createSlice({
    name: 'users',
    initialState: {
        list: []
    },
    reducers: {
        getUsersAll: (state:any, action:any) => {
            // Ensuite nous integrons nos data dans le state listOffer
            console.log("aaaaaaaaaaaaa",action.payload.data_result);
            
            state.list=state.list.concat(action.payload.data_result) 
        },
    },
})

// Action creators are generated for each case reducer function
export const { getUsersAll } = userSlice.actions

/* ************************************
 * Ici nous pouvons stocker nos actions
 * ************************************ */ 
const { REACT_APP_API_ENDPOINT } = process.env;

export const fetchDataUsers = (pagesize:any, oldLimit:any): any => async (dispatch:any) => {
    // call de l'api
    const res = await axios.get(`${REACT_APP_API_ENDPOINT}/user/all?pagesize=${pagesize}&oldlimit=${oldLimit}`)
    console.log('STORE :: fetchDataUsers ', res.data)
    // Ensuite on dispatch notre resultat avec 
    dispatch({ type: 'users/getUsersAll', payload: res.data })
};

export default userSlice.reducer