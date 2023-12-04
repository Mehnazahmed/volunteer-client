import { useQuery } from 'react-query';
import { useAuth } from './useAuth';
import useAxiosSecure from './useAxiosSecure';

const useJoinedEventsByEmail = () => {
    const {user} =useAuth();
    const[axiosSecure]=useAxiosSecure();

    const {data:joinedEventsByEmail=[],isLoading,refetch} =useQuery({
      queryKey:['joinedEventsByEmail'],
      queryFn: async()=>{
        const res =await axiosSecure
          .get(`/joinedevents/${user.email}`);
          return res.data;

        },
    });
    return {joinedEventsByEmail,refetch};
};

export default useJoinedEventsByEmail;