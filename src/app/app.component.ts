import { Component } from '@angular/core';


import { DUMMY_USERS } from "./dummy-users";
import { HeaderComponent } from './header/header.component';


@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',

    styleUrl: './app.component.css',


})
export class AppComponent {

  users=DUMMY_USERS;

  selectedUserId?:string;

  get selectedUser() {

    return this.users.find((user)=> user.id=== this.selectedUserId)!

  }


  onSelectUser_app(id:string)
  {
  //  console.log('Selected user with id'+ id);
  this.selectedUserId=id;
  }







}
