import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthServiceService } from '../auth-service.service';
import  jwt_decode  from 'jwt-decode';

@Component({
  selector: 'app-login-page',
  templateUrl: './login-page.component.html',
  styleUrls: ['./login-page.component.css']
})
export class LoginPageComponent implements OnInit {


  formGroup: FormGroup;

  constructor(private authService: AuthServiceService, private router: Router) { }


  ngOnInit(): void {
    this.initForm();
  }

  initForm() {
    this.formGroup = new FormGroup({
      username: new FormControl('', [Validators.required]),
      password: new FormControl('', [Validators.required]),
    })
  }

  loginProcess(){
    if(this.formGroup.valid){
      // console.log(this.formGroup);
      
      this.authService.login(this.formGroup.value).subscribe(result=>{
        // console.log(result);   
        var token_decode=jwt_decode(result['token']);
        
        switch (token_decode['roles'][0]) {
          
          
            case "ROLE_Admin":
              this.router.navigate(['/admin']);
              break;

        
        }

      
      })
    }
  }


}
