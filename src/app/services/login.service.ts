import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Router } from '@angular/router';
import { map } from 'rxjs/operators';
import { environment } from 'src/environments/environment';
import { JwtHelperService } from '@auth0/angular-jwt';

@Injectable({ providedIn: 'root' })
export class LoginService {

  constructor(
    private router: Router,
    private http: HttpClient,
    private helper: JwtHelperService
  ) { }

  getUserDetails(username){
    return this.http
    .get(environment.apiUrl + "candidatos/search/c_authenticate?email=" + username, { observe: "response" })
    .pipe(
      map(response => response)
    )
  }

  login(credenciales) {
    return this.http
      .post(environment.apiUrl + "login", JSON.stringify(credenciales), { observe: "response" })
      .pipe(
        map(response => response)
      )
  }

  logout() {
    localStorage.removeItem("token");
    localStorage.removeItem("idCliente");
    this.router.navigate([""]);
  }

  isLoggedIn() {
    return !this.helper.isTokenExpired();
  }

  get isAdmin() {
    let token = this.helper.tokenGetter();
    let decoded = this.helper.decodeToken(token).roles;
    return decoded.includes("ADMIN");
  }
}
