import { Member } from "../../model/Member";

const initialState = {
  membersArr:[]
};
export const memberReducer = (state = initialState, action: any) => {
  switch (action.type) {
    case "ADD_MEMBER":
      return {
        ...state,
        membersArr: [...state.membersArr, action.payload],
      };
    case "DELETE_MEMBER":
      let a = state.membersArr.filter((item:Member) => item.id!= action.payload);
      return {
        ...state,    
         membersArr: a,
      };
    case "SAVE_MEMBERS":
      return {
        ...state,
        membersArr: action.payload,
      };
    case "EDIT_MEMBER":
      let ind:number = state.membersArr.findIndex((member:Member) => member.id == action.payload.id);
      let arr:any=state.membersArr;
      arr[ind]= action.payload.s;
      return {
        ...state,
        membersArr: [...arr]
      };
    default:
      return {...state};
  }
};
