import { Box } from '@mui/material';
import React from 'react';
import useEvents from '../../../hooks/useEvents';
import EventCard from '../EventCard/EventCard';

const Events = () => {
    const{ events,refetch }= useEvents();
    console.log(events)
    return (
        <Box>
            <Box>
            {
                events.map((event)=><EventCard
                key={event._id}
                event={event}
                ></EventCard>)
            }
            </Box>
            
        </Box>
    );
};

export default Events;