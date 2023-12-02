import { Box, Container } from "@mui/material";
import { useQuery } from "react-query";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import WorkCard from "../WorkCard/WorkCard";

const Work = () => {
  const [axiosSecure] = useAxiosSecure();

  const { data: works = [] } = useQuery({
    queryKey: ["works"],
    queryFn: async () => {
      const res = await axiosSecure.get("works");
      return res.data;
    },
  });

 

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
          justifyItems: "center",
          gap: "5px",
          mt: 8,
        }}
      >
        {works.map((workData) => (
          <WorkCard key={workData.id} workData={workData}></WorkCard>
        ))}
      </Box>
    </Container>
  );
};

export default Work;
