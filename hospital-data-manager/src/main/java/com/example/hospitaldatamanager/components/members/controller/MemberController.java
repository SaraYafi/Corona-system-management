package com.example.hospitaldatamanager.components.members.controller;

import com.example.hospitaldatamanager.components.members.model.Member;
import com.example.hospitaldatamanager.components.members.service.MemberService;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.web.bind.annotation.*;

import java.util.List;

@CrossOrigin
@RestController
@RequestMapping("members")
public class MemberController {
    @Autowired
    private MemberService s;
    @GetMapping("")
    public List<Member> getAllMembers(){
        return s.getMembers();
    }

    @GetMapping("/{id}")
    public Member getSpecificMember(@PathVariable String id){
        return s.getMemberById(id);
    }

    @PutMapping("")
    public Member updateMember(@RequestBody Member newMember) {
        return s.updateMember(newMember);
    }
    @PostMapping("")
    public Member add(@RequestBody Member Member) {return s.addMember(Member);}
    @DeleteMapping("/{id}")
    public void delete(@PathVariable String id) {
        s.deleteMemberById(id);
    }


}
