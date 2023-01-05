import { fetchDataOffers } from '../store/reducers/OfferReducer';
import { fetchDataUsers } from '../store/reducers/UserReducer';
import { useSelector, useDispatch } from 'react-redux';
import { useEffect,useState } from 'react';
import { Link } from 'react-router-dom';

import OfferTable from '../organisms/Table/Offer';
import UserTable from '../organisms/Table/User';

import Tabs from '@mui/material/Tabs';
import Tab from '@mui/material/Tab';
import Box from '@mui/material/Box';

import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';

import PeopleIcon from "@mui/icons-material/People";
import WorkOutlineIcon from '@mui/icons-material/WorkOutline';
import MessageIcon from '@mui/icons-material/Message';
import ReportIcon from '@mui/icons-material/Report';
import HomeIcon from '@mui/icons-material/Home';

import './admin.css';

interface TabPanelProps {
    children?: React.ReactNode;
    index: number;
    value: number;
}
  
function TabPanel(props: TabPanelProps) {
    const { children, value, index, ...other } = props;
    return (
        <div
        role="tabpanel"
        hidden={value !== index}
        id={`vertical-tabpanel-${index}`}
        aria-labelledby={`vertical-tab-${index}`}
        {...other}
        >
        {value === index && (
            <Box sx={{ p: 3 }}>
            {children}
            </Box>
        )}
        </div>
    );
}

function a11yProps(index: number) {
    return {
        id: `vertical-tab-${index}`,
        'aria-controls': `vertical-tabpanel-${index}`,
    };
}

export default function OfferPage() {    
    const dispatch = useDispatch()
    
    const offers = useSelector((state:any) => state.offer.list);
    const users = useSelector((state:any) => state.user.list);
    const [value, setValue] = useState(0);
    const UserIcon = <PeopleIcon />
    const OfferIcon = <WorkOutlineIcon />
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
      setValue(newValue);
    };

    useEffect(() => {
        return ()=> {
            dispatch(fetchDataOffers(100,0))
            dispatch(fetchDataUsers(100,0))
        } 
    },[dispatch]);

    return (   
        <div>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar>
                        
                        <Link className='nav' to="/">
                            <HomeIcon/>
                        </Link>

                    </Toolbar>
                </AppBar>
            </Box>

        <Box
        sx={{ flexGrow: 1, bgcolor: 'background.paper', display: 'flex', height: "80vh" }}
        >
            <Tabs
                className="tabs-nav"
                orientation="vertical"
                variant="scrollable"
                value={value}
                onChange={handleChange}
                aria-label="Vertical-admin-tabs"
                sx={{ borderRight: 1, borderColor: 'divider', height: 300}}
            >
                <Tab label="Utilisateurs" {...a11yProps(0)} />
                <Tab label="Offres d'emploi" {...a11yProps(1)} />
                <Tab label="Message" {...a11yProps(2)} />
                <Tab label="Report" {...a11yProps(3)} />
            </Tabs> 
            <div style={{ width: '100%', height: "100%" }}>
                <TabPanel value={value} index={0}>
                    <UserTable users={users} icon={UserIcon} />
                </TabPanel>

                <TabPanel value={value} index={1}>
                    <OfferTable offers={offers} icon={OfferIcon} />
                </TabPanel>
                <TabPanel value={value} index={2}>
                    Listing de message (de la page contact)
                </TabPanel>
                <TabPanel value={value} index={3}>
                    Listing des reports (depuis la messagerie des utilisateurs)
                </TabPanel>
            </div>

            

        </Box> 
        
            <BottomNavigation
                showLabels
                value={value}
                onChange={handleChange}
                sx={{height:"10vh"}}
                className="bottom-nav"
                >
                <BottomNavigationAction label="Utilisateurs" icon={UserIcon} />
                <BottomNavigationAction label="Offres" icon={OfferIcon} />
                <BottomNavigationAction label="Message" icon={<MessageIcon />} />
                <BottomNavigationAction label="Report" icon={<ReportIcon />} />
            </BottomNavigation>
            
        </div>
    );
}





