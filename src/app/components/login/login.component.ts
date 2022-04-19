import {Component, OnInit} from '@angular/core';
import {Router} from "@angular/router";
import {NgForm} from "@angular/forms";
import {AuthorizationService} from "../../services/authorization.service";
import {User} from "../../classes/user";

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  login: string = ""
  password: string = ""
  authResult: string = ""
  valid: string = ""

  constructor(private router: Router, private auth: AuthorizationService) {
  }

  ngOnInit(): void {
  }

  navigateMain(form: NgForm) {
    if (form.valid) {
      this.valid = ""
      this.auth.authorization(new User(this.login, this.password)).subscribe(response => {
        this.authResult = ""
        localStorage.setItem('login', this.login)
        localStorage.setItem('password', this.password)
        localStorage.setItem('role', response)
        if (response == "ROLE_ADMIN") {
          this.router.navigate(['main/admin'])
        }else{
          this.router.navigate(['main/user'])
        }
      }, () => {
        this.authResult = "Неверный логин или пароль"
      })
    } else {
      this.valid = "Данные введены неверно"
    }
  }

  navigateCreate() {
    this.router.navigate(['create'])
  }
}
