import { fetchDataOffers } from '../store/reducers/OfferReducer';
import { useSelector, useDispatch } from 'react-redux'
import { useState, useEffect } from 'react';

import CardOffer from '../molecules/Offer/offerCard';

import Container from '@mui/material/Container';
import Button from '@mui/material/Button';
import Slider from '@mui/material/Slider';
import Card from '@mui/material/Card';
import Box from '@mui/material/Box';

export default function OfferPage() {    
    const dispatch = useDispatch()
    const data = useSelector((state:any) => state.offer.listOffers);
    useEffect(() => {
        return ()=> {
            dispatch(fetchDataOffers(5,0))
        } 
    },[dispatch]);

    const [limit, setLimit] = useState(5)

    const ChangeLimitOffers = (event: any, newValue:any) => {
        setLimit((typeof newValue === "number") ? newValue : 5);        
    };
    const loadMore = ()=>{
        dispatch(fetchDataOffers(limit,data.length))
    }
    return (
        <div>
            Offer PAGE

            <Box sx={{ width: 300, paddingTop:5, paddingLeft:5 }}>
                <Slider
                    aria-label="Limite offers"
                    defaultValue={5}
                    valueLabelDisplay="auto"
                    value={limit}
                    onChange={ChangeLimitOffers}
                    step={5}
                    min={1}
                    max={10}
                />
            </Box>

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