package com.example.hospitaldatamanager.components.members.service;

import com.example.hospitaldatamanager.components.members.model.Member;
import com.example.hospitaldatamanager.components.members.repository.MemberRepository;
import lombok.AllArgsConstructor;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import java.util.List;

@Service
@AllArgsConstructor
public class MemberServiceImp implements MemberService{

    @Autowired
    private final MemberRepository repository;


    @Override
    public Member addMember(Member m) {
        return repository.save(m);
    }

    @Override
    public List<Member> getMembers() {
        return repository.findAll();
    }

    @Override
    public Member getMemberById(String id) {
        return repository.findById(id);
    }

    @Override
    public void deleteMemberById(String id) {
        repository.deleteById(id);
    }

    @Override
    public Member updateMember(Member m) {
        return repository.save(m);
    }
}
