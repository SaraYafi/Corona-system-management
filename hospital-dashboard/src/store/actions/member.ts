import { Member } from "../../model/Member"

export const addMember = (member:Member) => {
    return {
        type: "ADD_MEMBER",
        payload: member
    }
}
export const deleteMember = (memberId:string) => {
    return {
        type: "DELETE_MEMBER",
        payload: memberId
    }
}
export const saveMembers = (memberArr:Member[]) => {
    return {
        type: "SAVE_MEMBERS",
        payload: memberArr
    }
}
export const editMember = (memberId:string,member:Member) => {
    return {
        type: "EDIT_MEMBER",
        payload: {id:memberId,s:member}
    }
}

