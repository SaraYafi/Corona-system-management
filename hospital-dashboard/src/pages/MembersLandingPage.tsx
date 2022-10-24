import { useEffect } from "react";
import { Member } from "../model/Member";
import BackButton from "../components/BackButton";
import Paper from "@mui/material/Paper";
import IconButton from "@mui/material/IconButton";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import DeleteForeverTwoToneIcon from '@mui/icons-material/DeleteForeverTwoTone';
import ModeEditOutlineTwoToneIcon from '@mui/icons-material/ModeEditOutlineTwoTone';
import { useNavigate } from "react-router-dom";

export default function MembersLandingPage(props: {
  a: Member[];
  saveMembers: Function;
  deleteMember: Function;
}) {
  const navigate=useNavigate();
  let arr: Member[] = props.a;
  useEffect(() => {
    if (!arr.length) {
      props.saveMembers();
    }
  }, []);
  const deleteM = (id:string)=>{
    props.deleteMember(id);
  }

  const editMember =(id:string)=>{
    navigate(`/members/edit/`+id);
  }

  return (
    <>
      <h1 style={{marginLeft:"40vw"}}>hospital dashboard</h1>
      <BackButton navigateTo="members/add" />
      <TableContainer component={Paper}>
        <Table sx={{ minWidth: 650 }} aria-label="simple table">
          <TableHead>
            <TableRow>
              <TableCell>ID</TableCell>
              <TableCell align="center">Name</TableCell>
              <TableCell align="center">Address</TableCell>
              <TableCell align="center">Phone</TableCell>
              <TableCell align="center">CellPhone</TableCell>
              <TableCell align="center">BirthDate</TableCell>
              <TableCell align="center">Edit/Show</TableCell>
              <TableCell align="center">Erase</TableCell>
            </TableRow>
          </TableHead>
          <TableBody>
            {arr.map((member) => (
              <TableRow
                key={member.id}
                sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
              >
                <TableCell component="th" scope="row">
                  {member.id}
                </TableCell>
                <TableCell align="center">
                  {member.firstName + " " + member.lastName}
                </TableCell>
                <TableCell align="center">
                  {member.address.city +
                    ", " +
                    member.address.street +
                    " " +
                    member.address.numHouse}
                </TableCell>
                <TableCell align="center">{member.phone}</TableCell>
                <TableCell align="center">{member.cellPhone}</TableCell>
                <TableCell align="center" >
                  {member.birthDate.toString().slice(0,10)}
                </TableCell>
                <TableCell align="center">
                <IconButton onClick={()=>editMember(member.id)}>
                    <ModeEditOutlineTwoToneIcon />
                  </IconButton>
                </TableCell>
                <TableCell align="center">
                <IconButton onClick={()=>deleteM(member.id)}>
                    <DeleteForeverTwoToneIcon />
                  </IconButton>
                 
                </TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      </TableContainer>
    </>
  );
}
