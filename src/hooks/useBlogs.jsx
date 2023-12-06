import axios from "axios";
import { useQuery } from "react-query";


const useBlogs =()=>{
    

    const {data:blogs=[],isLoading,refetch} =useQuery({
      queryKey:['blogs'],
      queryFn: async()=>{
        const res =await axios
          .get("http://localhost:5000/blogs");
          return res.data;

        },
    });
    return {blogs,refetch};


}
export default useBlogs;