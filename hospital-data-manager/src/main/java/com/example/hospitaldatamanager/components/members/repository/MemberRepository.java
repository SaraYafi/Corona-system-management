package com.example.hospitaldatamanager.components.members.repository;

import com.example.hospitaldatamanager.components.members.model.Member;
import org.springframework.data.mongodb.repository.MongoRepository;

public interface MemberRepository extends MongoRepository<Member,Integer> {
    Member findById(String s);
    void deleteById(String s);
}
