import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUser =()=>{
    const[axiosSecure]=useAxiosSecure()

    const {data:users=[],isLoading,refetch} =useQuery({
      queryKey:['users'],
      queryFn: async()=>{
        const res =await axiosSecure
          .get("/users");
          return res.data;

        },
    });
    return {users,refetch};


}
export default useUser;