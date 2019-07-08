import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Person } from '../people-list/model/person';
import { Course } from '../people-list/model/course';

@Injectable({
  providedIn: 'root'
})
export class ApiService {
  
  persons: Person[] = [];
  courses: Course[] = [];
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

   deletePerson(id: number){
     return this.http.delete<any>(this.url+id.toString());
   }

   updatePerson(updatedPerson: Person){
     return this.http.put<any>(this.url,updatedPerson);
   }

   getCourses(id: number){
     return this.http.get<Course[]>(this.url + id.toString() + '/courses');
   }

}
