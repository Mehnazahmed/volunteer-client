import { Box } from "@mui/material";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import * as React from "react";
import { FaRegTrashAlt } from "react-icons/fa";
import Swal from "sweetalert2";
import useAxiosSecure from "../../hooks/useAxiosSecure";
import useUser from "../../hooks/useUser";
import { CustomTableCell, CustomTableRow } from "./AllUsers.style";

function createData(name, calories, fat, carbs, protein) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData("Name", 159, 6.0, 24, 4.0),
  createData("Ice cream sandwich", 237, 9.0, 37, 4.3),
  createData("Eclair", 262, 16.0, 24, 6.0),
];

const AllUsers = () => {
  const{ users,refetch }= useUser();
  const [axiosSecure] =useAxiosSecure();
  console.log(users);

  const handleDeleteUser =(user)=>{
    Swal.fire({
        title: "Are you sure?",
        text: "You won't be able to revert this!",
        icon: "warning",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, delete it!",
      }).then((result)=>{
        if(result.isConfirmed){
            axiosSecure.delete(`/users/${user._id}`)
            .then((res)=>{
                const data =res.data;
                if(data.deletedCount>0){
                  refetch();
                  Swal.fire('Deleted Successfully')
                }
            });
        }
      });

  };
  return (
    <TableContainer component={Paper} style={{borderRadius:'20px'}}>
      <Table sx={{ minWidth: 650 }} aria-label="caption table">
        <TableHead sx={{backgroundColor:'#F5F6FA',
           
           }}>
          <CustomTableRow >
            <CustomTableCell align="center">Name</CustomTableCell>
            <CustomTableCell align="center">Email</CustomTableCell>
            <CustomTableCell align="center">Registrating Date</CustomTableCell>
            <CustomTableCell align="center">Volunteer list</CustomTableCell>
            <CustomTableCell align="center">Action</CustomTableCell>
          </CustomTableRow>
        </TableHead>
        <TableBody>
          {users.map((user) => (
            <TableRow key={user._id}>
              <CustomTableCell align="center" component="th" scope="row">
                {user.name}
              </CustomTableCell>
              <CustomTableCell align="center">{user.email}</CustomTableCell>
              <CustomTableCell align="center">{user.date}</CustomTableCell>
              <CustomTableCell align="center">{user.description}</CustomTableCell>
              <CustomTableCell align="center">
                <Box
               onClick={()=>handleDeleteUser(user)}
                style={{
                    border: "none", // Remove the border
                    boxShadow: "none", // Remove the box shadow
                 
                  }}
                
                  sx={{
                    backgroundColor: "#FF0000",
                    width: "25px",
                    height: "25px",
                    borderRadius: "5px",
                    
                  }}
                >
                  <FaRegTrashAlt
                    style={{
                      color: "#FFFFFF",
                      height: "25px",
                      
                    }}
                  />
                </Box>
              </CustomTableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default AllUsers;
