import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import OfferModal from './offerModal';

export default function OfferCard(props: any) {
    const { data } = props;
    return (
        <div>
            <CardContent>
                <Typography sx={{ fontSize: 14 }} color="text.secondary" gutterBottom>
                    {data.id}
                </Typography>
                <Typography variant="h5" component="div">
                    {data.title}
                </Typography>
                <Typography sx={{ mb: 1.5 }} color="text.secondary">
                    {data.description}
                    <br/>
                    {data.companylocation}
                </Typography>
                <Typography variant="body2">
                    {data.contracttype}
                    <br />
                    {}
                </Typography>
            </CardContent>
            <CardActions>
                <OfferModal data={data} />
            </CardActions>
            
        </div>
    );
}
