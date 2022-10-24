package com.example.hospitaldatamanager.components.members.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

import java.util.Date;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Vaccination {
    private Date vacDate;
    private String manufacturer;

}
