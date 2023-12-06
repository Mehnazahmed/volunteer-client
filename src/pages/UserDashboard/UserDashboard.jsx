import { Box, Typography } from "@mui/material";
import React from "react";
import { useQuery } from "react-query";
import { useAuth } from "../../hooks/useAuth";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import JoinedEventCard from "./JoinedEventCard";

const UserDashboard = () => {
  const { user } = useAuth();
  const [axiosSecure] = useAxiosSecure();

  const {
    data: userJoinedEvents = [],
    isLoading,
    refetch,
  } = useQuery({
    queryKey: ["events"],
    queryFn: async () => {
      const res = await axiosSecure.get(`/joinedevents/${user.email}`);
      return res.data;
    },
  });
  console.log(userJoinedEvents);

  return (
    <Box
      sx={{
        bgcolor: "#E5E5E5",
        mx: "auto",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <Typography variant="h4" sx={{ padding: 2, textAlign: "center" }}>
        Your Events!
      </Typography>
      <Box
        sx={{
          mx: "auto",
          justifyContent: "center",
          alignItems: "center",

          width: "100%",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(400px, 1fr))",
          gap: 2,
          padding: 8,
          flexDirection: { xs: "column", md: "row" },
        }}
      >
        {userJoinedEvents.map((joinedEvent) => (
          <JoinedEventCard
            key={joinedEvent._id}
            joinedEvent={joinedEvent}
            refetch={refetch}
          ></JoinedEventCard>
        ))}
      </Box>
    </Box>
  );
};

export default UserDashboard;
