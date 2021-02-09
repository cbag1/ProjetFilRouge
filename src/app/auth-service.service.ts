import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

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

  addProfil(data){
    return this.http.post('http://localhost:8000/api/admin/profils', data);
  }


  getUsers(){
    return this.http.get('http://localhost:8000/api/admin/users');
  }
}
