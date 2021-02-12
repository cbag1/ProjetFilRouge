import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Data, Router } from '@angular/router';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-update-user',
  templateUrl: './update-user.component.html',
  styleUrls: ['./update-user.component.css']
})
export class UpdateUserComponent implements OnInit {

  user: any;

  id: number;
  private sub: any;

  updateUserForm: FormGroup;
  avatar: any;
  url = '';

  constructor(private router: Router,
    private route: ActivatedRoute, private authservice: AuthServiceService) { }

  ngOnInit(): void {
    this.route.data.subscribe(
      (data: Data) => {
        this.user = data.user;
      }
    )
    this.initForm();
    console.log(this.user);
  }

  initForm() {
    this.updateUserForm = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
      prenom: new FormControl('', [Validators.required]),
      nom: new FormControl('', [Validators.required]),
      telephone: new FormControl(),
      email: new FormControl(),
      profil: new FormControl(),
      avatar: new FormControl()
    });

    this.avatar = this.user.avatar;
    
    this.updateUserForm.patchValue(
      {
        login: this.user.login,
        username: this.user.username,
        password: this.user.password,
        adresse: this.user.adresse,
        nom: this.user.nom,
        prenom: this.user.prenom,
        email: this.user.email,
        telephone: this.user.telephone,
        genre: this.user.genre,
        avatar: this.url
      }
    );
  }

  addProcess() {

    const { nom, username, password, prenom, adresse, telephone, email, genre } = this.updateUserForm.value;
    const user = new FormData();
    if (!this.avatar) {
      this.avatar = this.user.avatar;
    }
    user.append('nom', nom);
    user.append('username', username);
    user.append('password', password);
    user.append('prenom', prenom);
    // user.append('adresse', adresse);
    user.append('telephone', telephone);
    user.append('email', email);
    // user.append('genre', genre);
    user.append('avatar', this.avatar);
    this.authservice.updateOneUser(this.user.id, user).subscribe(
      res => {
        console.log("reussi");
      },
      error => {
        console.log(error);
      }
    );


  }

  onSelectFile(event){
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
