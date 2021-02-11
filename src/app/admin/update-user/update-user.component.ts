import { Component, OnInit } from '@angular/core';
import { FormGroup } from '@angular/forms';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  users: any = {};

  updateUserForm: FormGroup;
  avatar: any;
  url = '';

  constructor() { }

  ngOnInit(): void {
  }

  addProcess() {

  }

}
