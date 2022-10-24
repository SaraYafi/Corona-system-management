import { Outlet, Route, Routes } from 'react-router-dom';
import MembersLandingPage from './MembersLandingPage';
import EditMember from './EditMember';
import AddMember from './AddMember';
import { Member } from '../model/Member';
import { useDispatch, useSelector } from 'react-redux';
import { addMemberThunk, deleteMemberThunk, getMembersThunk, updateMemberThunk } from '../store/thunk';
import { AppDispatch, RootState } from '../store/store';

function ParentComponent() {
  let arr:Member[]=useSelector((state:RootState) => state.mbr.membersArr);
  let dispatch=useDispatch<AppDispatch>();
  const saveMembers =()=>{
    dispatch(getMembersThunk());
  }
  const updateMember=(member:Member)=>{
    dispatch(updateMemberThunk(member))
  }
  const addMember=(member:Member)=>{
    dispatch(addMemberThunk(member))
  }
  const deleteMember=(memberId:string)=>{
    dispatch(deleteMemberThunk(memberId))
  }


  return (<>
    <Routes>
    <Route path="members" element={<MembersLandingPage a={arr} saveMembers={saveMembers} deleteMember={deleteMember} />}/>
    <Route path="members/add" element={<AddMember addMember={addMember} />}/>
    <Route path="members/edit/:memberId" element={<EditMember updateMember={updateMember}/>}/>
    <Route path="" element={<MembersLandingPage a={arr} saveMembers={saveMembers} deleteMember={deleteMember}/>}/>
    </Routes>
    <Outlet/>
    </>
  );
}

export default ParentComponent;
