import { Box } from '@mui/material';
import React from 'react';
import { useQuery } from 'react-query';
import { useAuth } from '../../hooks/useAuth';
import useAxiosSecure from '../../hooks/useAxiosSecure';
import JoinedEventCard from './JoinedEventCard';

const UserDashboard = () => {
    const {user}=useAuth();
    const [axiosSecure] =useAxiosSecure();

    const {data: userJoinedEvents=[],isLoading}=useQuery({
      queryKey:['events'],
      queryFn: async ()=>{
        const res =await axiosSecure.get(`/joinedevents/${user.email}`)
        return res.data;
      },
      
    });
    console.log(userJoinedEvents)

    return (
        <Box>
            {Array.isArray(userJoinedEvents) ? (
                userJoinedEvents.map((joinedEvent) => (
                    <JoinedEventCard
                        key={joinedEvent._id}
                        joinedEvent={joinedEvent}
                    ></JoinedEventCard>
                ))
            ) : (
                <p>No joined events available.</p>
            )}
            
        </Box>
    );
};

export default UserDashboard;