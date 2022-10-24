package com.example.hospitaldatamanager.components.members.service;

import com.example.hospitaldatamanager.components.members.model.Member;

import java.util.List;

public interface MemberService {
    Member addMember(Member m);
    List<Member> getMembers();
    Member getMemberById(String id) ;
    void deleteMemberById(String id);
    Member updateMember( Member m);

}
