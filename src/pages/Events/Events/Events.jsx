import { Box } from "@mui/material";
import React from "react";
import useEvents from "../../../hooks/useEvents";
import EventCard from "../EventCard/EventCard";

const Events = () => {
  const { events, refetch } = useEvents();
  console.log(events);
  return (
    <Box   sx={{ width: "100%", mx: "auto" }}>
      <Box
        sx={{
          bgcolor: "#E5E5E5",
          mx: "auto",
          justifyContent:'center',
          alignItems:'center',
          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: 2,
          padding: 10,
          flexDirection: { xs: "column", md: "row" },

        }}
      >
        {events.map((event) => (
          <EventCard key={event._id} event={event}></EventCard>
        ))}
      </Box>
    </Box>
  );
};

export default Events;
