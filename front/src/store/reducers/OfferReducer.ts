import { createSlice } from '@reduxjs/toolkit'
import axios from 'axios';

export const offerSlice = createSlice({
    name: 'offers',
    initialState: {
        listOffers: []
    },
    reducers: {
        getOfferAll: (state:any, action:any) => {
            // Ensuite nous integrons nos data dans le state listOffer
            state.listOffers=state.listOffers.concat(action.payload.data) 
        },
    },
})

// Action creators are generated for each case reducer function
export const { getOfferAll } = offerSlice.actions

/* ************************************
 * Ici nous pouvons stocker nos actions
 * ************************************ */ 
const { REACT_APP_API_ENDPOINT } = process.env;

export const fetchDataOffers = (pagesize:any, oldLimit:any): any => async (dispatch:any) => {
    // call de l'api
    const res = await axios.get(`${REACT_APP_API_ENDPOINT}/offer/all?pagesize=${pagesize}&oldlimit=${oldLimit}`)
    console.log('STORE :: fetchDataOffers ', res.data)
    // Ensuite on dispatch notre resultat avec 
    dispatch({ type: 'offers/getOfferAll', payload: res.data })
};


export default offerSlice.reducer