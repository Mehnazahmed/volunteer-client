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

  console.log(works);
//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const res = await fetch("service.json");
//         const jsonData = await res.json();
//         setData(jsonData);
//       } catch (error) {
//         console.error("Error fetching data:", error);
//       }
//     };
//     fetchData();
//   }, []);
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
