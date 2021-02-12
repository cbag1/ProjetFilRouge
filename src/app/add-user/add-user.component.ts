import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from '../auth-service.service';
import { User } from './user.model';

@Component({
  selector: 'app-add-user',
  templateUrl: './add-user.component.html',
  styleUrls: ['./add-user.component.css']
})
export class AddUserComponent implements OnInit {

  users: any = {};

  addUserForm: FormGroup;
  avatar: any;
  url = '../../assets/hacker.png';

  constructor(private authservice: AuthServiceService) { }

  ngOnInit(): void {
    console.log("cool");
    this.initForm();
    this.initUsers();
    
  }

  initUsers(){
    this.authservice.getUsers().subscribe(res => {
      this.users = res['hydra:member'];
      // this.profils = Array.of(this.profils);
      // console.log("test users");
      
      console.log(this.users);
      // console.log(this.users);
    })
  }

  



  initForm() {
    this.addUserForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      telephone: new FormControl(),
      email: new FormControl(),
      profil: new FormControl(),
      avatar: new FormControl()
    })
  }

  delete(user){
    this.authservice.deleteUser(user.id).subscribe();
    this.initUsers();
  }

  addProcess() {

    const { nom, username, password, prenom, telephone, email, profil } = this.addUserForm.value;
    const user = new FormData();
    user.append('nom', nom);
    user.append('username', username);
    user.append('password', password);
    user.append('prenom', prenom);
    // user.append('adresse', adresse);
    user.append('telephone', telephone);
    user.append('email', email);
    // user.append('genre', genre);
    user.append('profil', profil);
    user.append('avatar', this.avatar);
    this.authservice.addUser(user).subscribe();
    this.initUsers();

    // const user: User = this.addUserForm.value;
    // console.log(this.addUserForm.value);
    // console.log("cool");
    // this.authservice.addUser(user).subscribe();
    // this.initList();


    // if(this.addProfilForm.valid){
    //   // console.log(this.addProfilForm);

    //   this.authservice.addProfil(this.addProfilForm.value).subscribe(
    //     (response) => console.log(response),
    //     (error) => console.log(error)
    //   )
    // }
  }

  onSelectFile(event) {
    if (event.target.files && event.target.files[0]) {
      this.avatar = event.target.files[0];
      const reader = new FileReader();
      reader.readAsDataURL(event.target.files[0]);
      // tslint:disable-next-line:no-shadowed-variable
      reader.onload = (event: any) => { // called once readAsDataURL is completed
        this.url = event.target.result;
      };
    }
  }

}
