import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';
import { inherits } from 'util';
import { Profil } from './profil.model';

@Component({
  selector: 'app-profil',
  templateUrl: './profil.component.html',
  styleUrls: ['./profil.component.css']
})
export class ProfilComponent implements OnInit {

  profils: Profil = {};
  addProfilForm: FormGroup;


  constructor(private authservice: AuthServiceService) { }

  ngOnInit(): void {
    console.log("cool");
    this.initForm();
    this.initList();

  }


  initList() {
    this.authservice.getProfils().subscribe(res => {
      this.profils = res['hydra:member'];
      // this.profils = Array.of(this.profils);
      console.log("test profil");
      console.log(this.profils);
    })
  }

    initForm() {
      this.addProfilForm = new FormGroup({
        libelle: new FormControl('', [Validators.required]),
      })
    }


  addProcess() {

    const prof: Profil = this.addProfilForm.value;
    // console.log(prof);
    this.authservice.addProfil(prof).subscribe(
      response => {
        console.log(response);
      },
      error => {
        console.log(error);
      }
    );
    this.initList();


    // if(this.addProfilForm.valid){
    //   // console.log(this.addProfilForm);

    //   this.authservice.addProfil(this.addProfilForm.value).subscribe(
    //     (response) => console.log(response),
    //     (error) => console.log(error)
    //   )
    // }
  }


}
