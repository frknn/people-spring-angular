package com.stajokulu.person.person.course;

import com.stajokulu.person.person.Person;
import org.hibernate.annotations.OnDelete;
import org.hibernate.annotations.OnDeleteAction;

import javax.persistence.*;

@Entity
public class Course {
    public Course(Long id, String name, Person person) {
        this.id = id;
        this.name = name;
        this.person = person;
    }

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

    public Person getPerson() {
        return person;
    }

    public void setPerson(Person person) {
        this.person = person;
    }

    @Id
    private Long id;
    private String name;

    @ManyToOne
    @OnDelete(action = OnDeleteAction.CASCADE)
    private Person person;

    public Course(){}




}
