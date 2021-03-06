import { Injectable } from '@angular/core';
import { Router, CanActivate } from '@angular/router';
import { AuthService } from './auth.service';

@Injectable()
export class AuthGuardService implements CanActivate{

  constructor(private _authService: AuthService, private _router: Router) { }

  canActivate(): boolean {
    console.log(this._authService.authStatus)
    if(!this._authService.authStatus) {
      this._router.navigate(['/login']);
      return false;
    }
    return true;
  }
}
