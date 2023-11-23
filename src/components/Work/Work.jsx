import { Box, Container } from "@mui/material";
import { useEffect, useState } from "react";
import WorkCard from "../WorkCard/WorkCard";


const Work = () => {
    

    const [data, setData] = useState([]);
    console.log(data)
   
    useEffect(()=>{
        const fetchData =async ()=>{
            try{
                const res =await fetch('service.json');
                const jsonData =await res.json();
                setData(jsonData);
            }catch (error){
                console.error('Error fetching data:', error);
            }
        };
        fetchData();
    },[])
    return (
       <Container maxWidth='lg'>
         <Box sx={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fit, minmax(200px, 1fr))",
            justifyItems: "center",
            gap: "5px",
            mt: 8,
          }}>
            {
                data.map((workData)=><WorkCard
                key={workData.id}
                workData={workData}
                ></WorkCard>)
            }
        </Box>
       </Container>
    );
};

export default Work;