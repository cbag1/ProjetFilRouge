import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AddUserComponent } from './add-user/add-user.component';
import { AdminComponent } from './admin/admin.component';
import { CompetencesComponent } from './admin/competences/competences.component';
import { GroupeTagsComponent } from './admin/groupe-tags/groupe-tags.component';
import { GrpeCompetenceComponent } from './admin/grpe-competence/grpe-competence.component';
import { ProfilSortieComponent } from './admin/profil-sortie/profil-sortie.component';
import { ProfilComponent } from './admin/profil/profil.component';
import { PromosComponent } from './admin/promos/promos.component';
import { ReferentielComponent } from './admin/referentiel/referentiel.component';
import { UpdateUserComponent } from './admin/update-user/update-user.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuVerticalParametresComponent } from './menu-vertical-parametres/menu-vertical-parametres.component';
import { MenuVerticalUserComponent } from './menu-vertical-user/menu-vertical-user.component';
import { MenuVerticalComponent } from './menu-vertical/menu-vertical.component';

const routes: Routes = [
  { path: 'login', component: LoginPageComponent },
  { path: '', component: LoginPageComponent },
  {
    path: 'admin', component: AdminComponent,
    children: [
      { path: 'profil', component: ProfilComponent },
      { path: 'users', component: AddUserComponent },
      { path: 'competences', component: CompetencesComponent },
      { path: 'menuUser', component: MenuVerticalUserComponent, outlet: 'menuvertical' },
      { path: 'menuParametres', component: MenuVerticalParametresComponent, outlet: 'menuvertical' },
      { path: 'profilsortie', component: ProfilSortieComponent },
      { path: 'groupetags', component: GroupeTagsComponent },
      { path: 'updateUser', component: UpdateUserComponent},
      { path: 'groupecompetences', component: GrpeCompetenceComponent },
      { path: 'referentiels', component: ReferentielComponent },
      { path: 'promos', component: PromosComponent }

    ]
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
