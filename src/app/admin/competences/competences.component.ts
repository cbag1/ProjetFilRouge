import { Component, OnInit } from '@angular/core';
import { FormArray, FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { AuthServiceService } from 'src/app/auth-service.service';

@Component({
  selector: 'app-competences',
  templateUrl: './competences.component.html',
  styleUrls: ['./competences.component.css']
})
export class CompetencesComponent implements OnInit {

  competences: any = {};
  niveaux: any = {};
  watchniveau = false;
  clickniveau = false;
  addCompetencesForm: FormGroup;
  nbNiveaux = 0;

  constructor(private authservice: AuthServiceService, private fb: FormBuilder) {
    this.addCompetencesForm = this.fb.group({
      libelle: '',
      description: '',
      niveaux: this.fb.array([]),
    });
  }

  ngOnInit(): void {

    this.initList();
    // this.initForm();
  }

  initList() {
    this.authservice.getCompetences().subscribe(res => {
      this.competences = res['hydra:member'];
      // this.profils = Array.of(this.profils);
      console.log("test competences");
      console.log(this.competences);
    })
  }

  addNiveaux() {
    if (this.nbNiveaux < 3) {
      const niv = this.addCompetencesForm.controls.niveaux as FormArray;
      niv.push(this.fb.group({
        description: '',
        critereEvaluation: '',
      }));
      this.nbNiveaux++;
    }

  }


  afficherniveau(numero) {
    this.watchniveau = true;
    this.niveaux = this.competences[numero]['niveaux'];
    console.log(this.niveaux);
  }

  niveaucliquer() {
    this.clickniveau = true;
  }

  addProcess() {
    console.log("Test Ajout");

    this.authservice.addCompetence(this.addCompetencesForm.value).subscribe(
      res => {
        console.log(res);
      },
      error => {
        console.log(error);
      }
    );
    this.initList();
  }

}
