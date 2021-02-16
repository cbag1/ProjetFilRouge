import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-profil-sortie',
  templateUrl: './profil-sortie.component.html',
  styleUrls: ['./profil-sortie.component.css']
})
export class ProfilSortieComponent implements OnInit {

  profils: any = {};
  addProfilSortieForm: FormGroup;
  archive: boolean = false;

  constructor(private authservice: AuthServiceService) { }

  ngOnInit(): void {
    this.initForm();
    this.initList();
  }

  initForm() {
    this.addProfilSortieForm = new FormGroup({
      libelle: new FormControl('', [Validators.required]),
    })
  }

  initList() {
    this.authservice.getProfilSortie().subscribe(res => {
      this.profils = res['hydra:member'];
      // this.profils = Array.of(this.profils);
      console.log("test profil Sortie");
      console.log(this.profils);
    })
  }

  addProcess(){
    console.log(this.addProfilSortieForm.value);
    this.authservice.addProfilSortie(this.addProfilSortieForm.value).subscribe();
    this.initList();
  }

}
