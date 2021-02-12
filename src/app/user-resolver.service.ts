
import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, Resolve, RouterStateSnapshot } from '@angular/router';
import { HttpClient } from "@angular/common/http";
import { tap } from "rxjs/operators";
import { AuthServiceService } from './auth-service.service';

@Injectable({
  providedIn: 'root'
})
export class UserResolverService implements Resolve<any> {

  constructor(private authservice: AuthServiceService) { }
  resolve(route: ActivatedRouteSnapshot,
    state: RouterStateSnapshot) {
    return this.authservice.getbyOne(+route.params.id);
  }
}
