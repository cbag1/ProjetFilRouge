import { Profil } from "../admin/profil/profil.model";

export class User {
    id?: number;
    username: string;
    password?: string;
    prenom: string;
    nom: string;
    // adresse: string;
    telephone: string;
    email: string;
    // genre: string;
    avatar?: any;
    // token?: string;
    profil?: Profil;
    constructor(id: number, login: string, password: string,
                prenom: string, nom: string, 
                telephone: string, email: string, profil: Profil, avatar: any) {
      this.id = id;
      this.username = login;
      this.password = password;
      this.prenom = prenom;
      this.nom = nom;
    //   this.genre = genre;
    //   this.adresse = adresse;
      this.telephone = telephone;
      this.email = email;
      this.profil = profil;
      this.avatar = avatar;
    }
  }