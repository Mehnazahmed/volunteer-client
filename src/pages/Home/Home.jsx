import { Stack } from '@mui/material';
import React from 'react';
import Work from '../../components/Work/Work';

const Home = () => {
    return (
        <Stack maxWidth='xl'  sx={{position: 'relative', zIndex: 2, margin: -18, mx:'auto',padding: 4,
        
        
        }}>
            <Work/>
        </Stack>
    );
};

export default Home;