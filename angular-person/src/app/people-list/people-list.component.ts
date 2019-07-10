import { Component, OnInit, Injectable } from '@angular/core';
import { Person } from './model/person';
import { ApiService } from '../shared/api.service';
import { FormControl, FormGroup } from '@angular/forms';
import { Course } from './model/course';

@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})

export class PeopleListComponent implements OnInit {

  persons: Person[] = [];
  courses: Course[] = [];
  person: Person;
  flag: boolean = true;
  searchname = new FormControl('');
  name1: string;
  searched: Person[] = [];
  profileForm = new FormGroup({
    firstName: new FormControl(''),
    lastName: new FormControl(''),
  });


  constructor(private apiService: ApiService) { }

  ngOnInit() {
    this.getAllPersons();
  }

  public getAllPersons() {
    this.apiService.getAllPersons().subscribe(
      res => {
        this.persons = res;
      },
      err => {
        alert("An error has occured!");
      }
    );
  }

  public onKey() {
    this.apiService.getAllPersons().subscribe(
      res => {
        this.persons = res;
        this.searched = this.persons.filter(person => {
          if (person.name.includes(this.name1) && this.searched.indexOf(person) === -1) {
            return person;
          }
        })
        this.persons = this.searched;
      },
      err => {
        alert("an error occured");
      }
    )
  }

  public onSubmit() {
    this.person = {
      id: Math.floor(Math.random() * 1000) + 3,
      name: this.profileForm.value.firstName,
      surname: this.profileForm.value.lastName
    }
    this.apiService.addPerson(this.person).subscribe(
      res => {
        this.person = res;
        this.getAllPersons();
      },
      err => {
        alert(err);
      }
    );
  }

  public getCourses(id) {
    this.apiService.getCourses(id).subscribe(
      res => {
        this.courses = res;
        console.log(this.courses);
      },
      err => { alert(err) }
    );
  }

  public deleteCourse(personId: number, courseId: number) {
    this.apiService.deleteCourse(personId, courseId).subscribe(
      res => {
        this.courses = res,
          this.getCourses(personId);
      },
      err => {
        console.log(err);
      }
    )
  }


  public deletePerson(id: number) {
    this.apiService.deletePerson(id).subscribe(
      res => {
        this.person = res;
        this.getAllPersons();
      },
      err => {
        alert(err);
      }
    );
  }

  public updateFields(person2: Person) {
    this.profileForm.setValue({
      firstName: person2.name,
      lastName: person2.surname
    });
  }

  public updatePerson(person3: Person) {
    this.person = {
      id: person3.id,
      name: this.profileForm.value.firstName,
      surname: this.profileForm.value.lastName
    }
    this.apiService.updatePerson(this.person).subscribe(
      res => {
        this.person = res;
        this.getAllPersons();
      },
      err => {
        alert(err);
      }
    )
  }
}