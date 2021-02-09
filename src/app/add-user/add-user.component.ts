import { Component, OnInit } from '@angular/core';
import { AuthServiceService } from '../auth-service.service';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  users: any = {};

  constructor(private authservice: AuthServiceService) { }

  ngOnInit(): void {
    console.log("cool");
    // this.initForm();
    this.authservice.getUsers().subscribe(res => {
      this.users = res['hydra:member'];
      // this.profils = Array.of(this.profils);
      // console.log("test users");
      console.log(this.users);
      // console.log(this.users);
    })
  }

}
