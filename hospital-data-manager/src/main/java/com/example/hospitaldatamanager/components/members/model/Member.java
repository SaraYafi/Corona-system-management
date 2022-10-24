package com.example.hospitaldatamanager.components.members.model;

import lombok.Setter;
import org.springframework.data.annotation.Id;
import org.springframework.data.mongodb.core.mapping.Document;
import lombok.AllArgsConstructor;
import lombok.Data;
import lombok.NoArgsConstructor;

import java.util.Date;
import java.util.List;


@Data
@NoArgsConstructor
@AllArgsConstructor
@Document(collection = "members")
@Setter
public class Member {
    @Id
    private String id;
    private String firstName;
    private String lastName;
    private Address address;
    private Date birthDate;
    private String phone;
    private String cellPhone;
    private Date positiveResultDate;
    private Date recoveryDate;
    private List<Vaccination> vaccinations;
}
