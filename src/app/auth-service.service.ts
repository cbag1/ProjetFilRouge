import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';
import { Profil } from './admin/profil/profil.model';
import { User } from './add-user/user.model';

@Injectable({
  providedIn: 'root'
})
export class AuthServiceService {

  constructor(private http: HttpClient) { }



  login(data) {
    return this.http.post(`http://localhost:8000/api/login`, data)
      .pipe(
        map(response => {
          // login successful if there's a jwt token in the response
          if (response) {
            // console.log(response);
            //console.log(response);
            localStorage.setItem('jwt', JSON.stringify(response));
            return response;
          }
        })
      );
  }

  getProfils() {
    return this.http.get('http://localhost:8000/api/admin/profils');
  }

  addProfil(data) {
    // @ts-ignore
    return this.http.post('http://localhost:8000/api/admin/profils', data);
  }

  getUsers() {
    return this.http.get('http://localhost:8000/api/admin/users');
  }

  addUser(data) {
    return this.http.post('http://localhost:8000/api/admin/users', data);
  }

  updateOneUser(id: number, data) {

    return this.http.put(`/api/admin/users/${id}`, data);
  }

  getbyId(id: number) {
    return this.http.get(`/api/admin/users/${id}`);
  }


}
