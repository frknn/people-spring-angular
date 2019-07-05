import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Person } from '../people-list/model/person';
import { Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  persons: Person[] = [];
  person: Person;
  flag: boolean = true;

  private url ="http://localhost:8080/person/";

  constructor(private http: HttpClient) {

   }

   getAllPersons(){
      return this.http.get<Person[]>(this.url);
   }

   addPerson(person1: Person){
     return this.http.post<Person>(this.url,person1);
   }

   getSurname(id: number){
     return this.http.get<Person>(this.url+id.toString());
   }

   deletePerson(id: number){
     return this.http.delete<any>(this.url+id.toString());
   }

   updatePerson(updatedPerson: Person){
     return this.http.put<any>(this.url,updatedPerson);
   }


}
