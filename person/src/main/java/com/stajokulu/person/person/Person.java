package com.stajokulu.person.person;

import lombok.Data;

import javax.persistence.Entity;
import javax.persistence.Id;
import javax.persistence.Table;

@Entity
@Table(name="person")
@Data
public class Person {
    public Person(Long id, String name, String surname) {
        this.id = id;
        this.name = name;
        this.surname = surname;
    }
    public Person(){}

    public Long getId() {
        return id;
    }

    public void setId(Long id) {
        this.id = id;
    }

    public String getName() {
        return name;
    }

    public void setName(String name) {
        this.name = name;
    }

    public String getSurname() {
        return surname;
    }

    public void setSurname(String surname) {
        this.surname = surname;
    }

    @Id
    private Long id;
    private String name;
    private String surname;
}
