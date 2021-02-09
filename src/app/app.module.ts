import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LoginPageComponent } from './login-page/login-page.component';
import { MenuComponent } from './menu/menu.component';
import { AdminComponent } from './admin/admin.component';
import { MenuVerticalComponent } from './menu-vertical/menu-vertical.component';
import { MenuVerticalUserComponent } from './menu-vertical-user/menu-vertical-user.component';
import { MenuVerticalParametresComponent } from './menu-vertical-parametres/menu-vertical-parametres.component';
import { ListUsersComponent } from './list-users/list-users.component';
import { AddUserComponent } from './add-user/add-user.component';
import { ProfilComponent } from './admin/profil/profil.component';
import { CompetencesComponent } from './admin/competences/competences.component';
import { ProfilSortieComponent } from './admin/profil-sortie/profil-sortie.component';
import { GroupeTagsComponent } from './admin/groupe-tags/groupe-tags.component';
import { ReferentielComponent } from './admin/referentiel/referentiel.component';
import { PromosComponent } from './admin/promos/promos.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { JwtInterceptorInterceptor } from './jwt-interceptor.interceptor';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';


@NgModule({
  declarations: [
    AppComponent,
    LoginPageComponent,
    MenuComponent,
    AdminComponent,
    MenuVerticalComponent,
    MenuVerticalUserComponent,
    MenuVerticalParametresComponent,
    ListUsersComponent,
    AddUserComponent,
    ProfilComponent,
    CompetencesComponent,
    ProfilSortieComponent,
    GroupeTagsComponent,
    ReferentielComponent,
    PromosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    FontAwesomeModule
  ],
  providers: [{provide: HTTP_INTERCEPTORS, useClass: JwtInterceptorInterceptor, multi: true}],
  bootstrap: [AppComponent]
})
export class AppModule { }
