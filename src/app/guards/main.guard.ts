import {Injectable} from '@angular/core';
import {CanActivate, ActivatedRouteSnapshot, RouterStateSnapshot, Router} from '@angular/router';

@Injectable({
  providedIn: 'root'
})
export class MainGuard implements CanActivate {


  constructor(private router: Router) {
  }

  canActivate(next: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (localStorage.getItem('login') != null && localStorage.getItem('password') != null && localStorage.getItem('role') != null) {
      return true;
    } else {
      this.router.navigate(['/login']);
      return false;
    }
  }

}
