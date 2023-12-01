import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";


const useEvents =()=>{
    const[axiosSecure]=useAxiosSecure();

    const {data:events=[],isLoading,refetch} =useQuery({
      queryKey:['events'],
      queryFn: async()=>{
        const res =await axiosSecure
          .get("/events");
          return res.data;

        },
    });
    return {events,refetch};


}
export default useEvents;