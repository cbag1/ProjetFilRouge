import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-list-users',
  templateUrl: './list-users.component.html',
  styleUrls: ['./list-users.component.css']
})
export class ListUsersComponent implements OnInit {

  users: any= {};

  constructor(private authservice: AuthServiceService) { }

  ngOnInit(): void {

    console.log("cool");
    // this.initForm();
    this.authservice.getUsers().subscribe(res => {
      // this.users = res['hydra:member'];
      // this.profils = Array.of(this.profils);
      console.log("test users");
      console.log(res);
      // console.log(this.users);
    })
  }

}
