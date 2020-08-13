import { Component, OnDestroy, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { JwtHelperService } from '@auth0/angular-jwt';
import { Subscription } from 'rxjs';
import { LoginService } from 'src/app/services/login.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit, OnDestroy {

  loginSubscription: Subscription;

  form = new FormGroup({
    "email": new FormControl('',    [Validators.required, Validators.email]),
    "password": new FormControl('', [Validators.required, Validators.minLength(5), Validators.maxLength(30)])
  })

  constructor(private authService: LoginService,
              private router: Router,
              private helper: JwtHelperService) { }

  ngOnInit() {
    if( this.helper.tokenGetter() ) this.router.navigate(['/']);
  }

  ngOnDestroy() {
    if( this.loginSubscription ) this.loginSubscription.unsubscribe();
  }

  signIn(formData){
    this.loginSubscription = this.authService.login(formData).subscribe(response => {
      const authToken = response.headers.get("Authorization");

      if (authToken) {
        localStorage.setItem("token", authToken);
        /* this.authService
          .getUserDetails( formData.email )
            .subscribe(response => {
              if(response.status == 200)
              
                const idCliente = response.body['idCliente'];
                localStorage.setItem('idCliente', idCliente);
              }); */
        this.router.navigate(["perfil"]);
      }

    });
  }

  get email()     { return this.form.get('email') }
  get password()  { return this.form.get('password') }

}
