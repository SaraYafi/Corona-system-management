import axios, { AxiosResponse } from "axios"
import { Member } from "../model/Member"


    export async function getAllMembersApi() :Promise<AxiosResponse<Member[]>>{
        return await axios.get<Member[]>(`http://localhost:8080/members`)
    }
    export async function addMemberApi(member:Member) :Promise<AxiosResponse<Member>>{
        return await axios.post(`http://localhost:8080/members`,member)
    }
    export async function updateMemberApi(member:Member) :Promise<AxiosResponse<any>>{
        return await axios.put(`http://localhost:8080/members`,member)
    }
    export async function deleteMemberApi(id:string) :Promise<AxiosResponse<any>>{
        return await axios.delete(`http://localhost:8080/members/${id}`)
    }
    export async function getMemberByIdApi(id:string) :Promise<AxiosResponse<Member>>{
        return await axios.get(`http://localhost:8080/members/${id}`)
    }

