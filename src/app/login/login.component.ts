import {Component, OnInit} from '@angular/core';
import {FormBuilder, FormGroup, Validators} from "@angular/forms";
import {SessionService} from "../_services/session.service";
import {User} from "../_model/User";
import {Router} from "@angular/router";


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {

  private regexPattern = '^(?=.*[a-z])(?=.*[A-Z])(?=.*\\d)[A-Za-z\\d$#^@$!%*?&]{1,}$';
  public form: FormGroup;


  constructor(
    private fb: FormBuilder,
    private session: SessionService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.form = this.fb.group({
      username: [null, [
        Validators.minLength(5),
        Validators.required
      ]],
      password: [null, [
        Validators.minLength(8),
        Validators.pattern(this.regexPattern),
        Validators.required
      ]]
    });
  }

  createAndLogUser() {
    this.session.loginUser(<User>this.form.value);
    this.router.navigateByUrl('/home');
  }

  checkUserLength() {
    return this.form.controls.username.errors && this.form.controls.username.errors.minlength;
  }

  checkPasswordLength() {
    return this.form.controls.password.errors && this.form.controls.password.errors.minlength;
  }

  checkPasswordPattern() {
    return this.form.controls.password.errors && this.form.controls.password.errors.pattern;
  }

  enableLogin() {
    return this.form.controls.username.errors || this.form.controls.password.errors;
  }


}
