import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { Routes, Router, RouterModule } from '@angular/router';
import { ReactiveFormsModule } from '@angular/forms'
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { PeopleListComponent } from './people-list/people-list.component';
import { HttpClientModule } from '@angular/common/http';
// import { NameEditorComponent } from './name-editor/name-editor.component';

const appRoutes: Routes = [
  {
    path:'people',
    component:PeopleListComponent
  },
  {
    path:'',
    component:PeopleListComponent,
    pathMatch:'full'
  }
]

@NgModule({
  declarations: [
    AppComponent,
    PeopleListComponent,
    // NameEditorComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    ReactiveFormsModule,
    RouterModule.forRoot(appRoutes,{enableTracing:true})
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
