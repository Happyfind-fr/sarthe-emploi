import { fetchDataOffers } from '../store/reducers/OfferReducer';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';

import CardOffer from '../molecules/Offer/offerCard';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

export default function OfferPage() {    
    const dispatch = useDispatch()
    const data = useSelector((state:any) => state.offer.list);
    
    useEffect(() => {
        return ()=> {
            dispatch(fetchDataOffers(5,0))
        } 
    },[dispatch]);

    const loadMore = ()=>{
        dispatch(fetchDataOffers(15,data.length))
    }
    return (
        <div>
            Offer PAGE

            {data && data.map((el:any,i:number)=>{
                return(
                <div key={el.id}>
                    <Container fixed>
                    <Box sx={{ paddingBottom: 3 }}>
                        <Card variant="outlined">
                            <CardOffer data={el}/>
                        </Card>
                    </Box>
                    </Container>
                </div>
                )
            })
            }
            <Button variant="contained" onClick={loadMore}>Charger +</Button>
        </div>
    );
}