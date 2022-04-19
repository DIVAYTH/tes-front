import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';


@Injectable({
  providedIn: 'root'
})
export class LoginGuard implements CanActivate {


  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('login') != null && localStorage.getItem('password') != null && localStorage.getItem('role') != null) {
      if (localStorage.getItem('role') == 'ROLE_USER') {
        this.router.navigate(['/main/user']);
      }else{
        this.router.navigate(['/main/admin']);
      }
      return false;
    } else {
      return true;
    }
  }
}
