import { Injectable } from '@angular/core';
import { ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot, UrlTree } from '@angular/router';
import { Observable } from 'rxjs';
import { NavController } from '@ionic/angular';
import { ConstantService } from './constant.service';

@Injectable({
  providedIn: 'root'
})
export class AuthGuardService implements CanActivate {
  constructor (public navCtrl: NavController, public route: Router, public constant: ConstantService) { }
  canActivate (next: ActivatedRouteSnapshot, state: RouterStateSnapshot): Observable<boolean | UrlTree>
    | Promise<boolean | UrlTree> | boolean | UrlTree {
    const authDetail = this.constant.getUserData();
    console.log(authDetail)
    if (!authDetail) {
      this.navCtrl.navigateRoot(['/login']);
      return false;
    } else {
      return true;
    }
  }
}