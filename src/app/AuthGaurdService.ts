import { inject, Injectable } from "@angular/core";
import { AngularFireAuth } from "@angular/fire/compat/auth";
import { CanActivateFn } from "@angular/router";

@Injectable({
  providedIn: 'root',
})
export class AuthGuardService {
  userMe: any = '';
  constructor(fbAuth: AngularFireAuth) {
    fbAuth.authState.subscribe((user) => {
      console.log(user?.displayName);
      this.userMe = user?.displayName;
    });
  }

  canActivate(): boolean {
    if (this.userMe !== '') {
      return true;
    } else {
      return false;
    }
  }
}

 export const canActivate: CanActivateFn = () => {
   return inject(AuthGuardService).canActivate();
 };
