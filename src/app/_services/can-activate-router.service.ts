import {Injectable} from '@angular/core';
import {ActivatedRouteSnapshot, CanActivate, Router, RouterStateSnapshot} from "@angular/router";
import {SessionService} from "./session.service";

@Injectable()
export class CanActivateRouterService implements CanActivate {

  constructor(
    private router: Router,
    private session: SessionService) {
  }

  canActivate(route: ActivatedRouteSnapshot, state: RouterStateSnapshot): boolean {
    if (this.session.isLogged()) {
      return true;
    }
    this.router.navigate(['/login']);
    return false;
  }

}
