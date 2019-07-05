// import { Component, OnInit } from '@angular/core';
// import { FormControl, FormGroup} from '@angular/forms';
// import { Person } from '../people-list/model/person';
// import { ApiService } from '../shared/api.service';
// import { Router } from '@angular/router';
// import { PeopleListComponent } from '../people-list/people-list.component';

// @Component({
//   selector: 'app-name-editor',
//   templateUrl: './name-editor.component.html',
//   styleUrls: ['./name-editor.component.css']
// })
// export class NameEditorComponent implements OnInit{

//   person: Person;
//   persons: Person[];

//   profileForm = new FormGroup({
//     firstName: new FormControl(''),
//     lastName: new FormControl(''),
//   });

//   constructor(private apiService: ApiService, private router: Router) { }

//   ngOnInit(){}

//   onSubmit(){
//     // alert(this.profileForm.value.firstName +" "
//     // + this.profileForm.value.lastName);
//     this.person = {
//       id: Math.floor(Math.random() * 100) + 3,
//       name: this.profileForm.value.firstName,
//       surname: this.profileForm.value.lastName
//     }
//     this.apiService.addPerson(this.person);
//   }

// }
