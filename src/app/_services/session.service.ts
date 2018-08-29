import {Injectable} from '@angular/core';
import {User} from "../_model/User";
import {Router} from "@angular/router";

@Injectable()
export class SessionService {

  private userKey: string = "user";

  constructor(private router: Router) {
    // this.logoutUser(); //not required if we want to keep user's session
  }

  public loginUser(user: User) {
    sessionStorage.setItem(this.userKey, JSON.stringify(user));
  }

  public logoutUser() {
    sessionStorage.removeItem(this.userKey);
    this.router.navigateByUrl('/login')
  }

  public isLogged(): boolean {
    return !!sessionStorage.getItem(this.userKey);
  }

}
