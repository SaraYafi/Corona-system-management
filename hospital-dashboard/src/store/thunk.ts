import { AppDispatch } from "./store"
import {addMemberApi, deleteMemberApi, getAllMembersApi, updateMemberApi} from "../api/members.api" 
import { Member } from "../model/Member"
import { addMember, deleteMember, editMember, saveMembers } from "./actions/member"

export const getMembersThunk=()=>{
    return async (dispatch:AppDispatch) =>{
        try{
            const members:Member[]= await (await getAllMembersApi()).data;
            dispatch(saveMembers(members))
        }
        catch(error){
           console.log(error)
        }
    } 
}
export const updateMemberThunk=(s:Member)=>{
    return async (dispatch:AppDispatch) =>{
        try{
            const member:Member= await (await updateMemberApi(s)).data;
            dispatch(editMember(s.id,s))
        }
        catch(error){
           console.log(error)
        }
    } 
}
export const addMemberThunk=(s:Member)=>{
    return async (dispatch:AppDispatch) =>{
        try{
            const member:Member= await (await addMemberApi(s)).data;
            dispatch(addMember(member));
        }
        catch(error){
           console.log(error)
        }
    } 
}
export const deleteMemberThunk=(memberId:string)=>{
    return async (dispatch:AppDispatch) =>{
        try{
            const member= await (await deleteMemberApi(memberId)).data;
            dispatch(deleteMember(memberId))
        }
        catch(error){
           console.log(error)
        }
    } 
}
