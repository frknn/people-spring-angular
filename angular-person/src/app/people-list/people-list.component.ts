import { Component, OnInit, Injectable } from '@angular/core';
import { Person } from './model/person';
import { ApiService } from '../shared/api.service';
import { FormControl, FormGroup } from '@angular/forms';


@Component({
  selector: 'app-people-list',
  templateUrl: './people-list.component.html',
  styleUrls: ['./people-list.component.css']
})

export class PeopleListComponent implements OnInit {

  persons: Person[] = [];
  person: Person;
  flag: boolean = true;
  searchname=new FormControl('');
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

  public onKey(){
    this.apiService.getAllPersons().subscribe(
      res => {
        this.persons = res;
        this.searched = this.persons.filter(person => {
          if(person.name.includes(this.name1) && this.searched.indexOf(person) === -1){
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


  public getSurname(id: number) {
    this.apiService.getSurname(id).subscribe(
      res => {
        this.person = res;
        var elem1 = document.getElementById(this.person.id.toString());
        var btnSurname = document.getElementById("btn " + this.person.id.toString());
        if (this.flag === true) {
          elem1.innerHTML += " " + this.person.surname;
          btnSurname.innerText = "Hide";
          this.flag = !this.flag;
        } else {
          elem1.innerHTML = this.person.name;
          btnSurname.innerText = "Surname";
          this.flag = !this.flag;
        }
      },
      err => {
        alert("Error!");
      }
    );
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
