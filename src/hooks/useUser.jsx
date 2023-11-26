import { useQuery } from "react-query";
import useAxiosSecure from "./useAxiosSecure";


const useUser =()=>{
    const[axiosSecure]=useAxiosSecure()

    const {data:users,isLoading} =useQuery({
      queryKey:['users'],
      queryFn: async()=>{
        const res =await axiosSecure
          .get("/users");

        return [users,isLoading]
      },
    });


}
export default useUser;