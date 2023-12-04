import { useQuery } from 'react-query';
import useAxiosSecure from './useAxiosSecure';

const useJoinedEvents = () => {
    const[axiosSecure]=useAxiosSecure();

    const {data:joinedEvents=[],isLoading,refetch} =useQuery({
      queryKey:['joinedEvents'],
      queryFn: async()=>{
        const res =await axiosSecure
          .get("/joinedevents");
          return res.data;

        },
    });
    return {joinedEvents,refetch};
};

export default useJoinedEvents;