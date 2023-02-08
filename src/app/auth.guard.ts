import { Injectable } from '@angular/core';
import { CanActivate, Router } from '@angular/router';
import { Observable } from 'rxjs';
import { UserService } from './services/user/user.service'

@Injectable({
  providedIn: 'root'
})
export class AuthGuard implements CanActivate {

  constructor(private authService: UserService, private router: Router) {

  }

  canActivate(): any {
    if (this.authService.loggedIn()) return true;

    this.router.navigate(['/signin'])
  }

}
