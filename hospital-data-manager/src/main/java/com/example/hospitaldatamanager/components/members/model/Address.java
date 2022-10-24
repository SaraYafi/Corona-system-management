package com.example.hospitaldatamanager.components.members.model;

import lombok.AllArgsConstructor;
import lombok.Getter;
import lombok.NoArgsConstructor;
import lombok.Setter;

@NoArgsConstructor
@AllArgsConstructor
@Getter
@Setter
public class Address {
    private String city;
    private String street;
    private int numHouse;
}
