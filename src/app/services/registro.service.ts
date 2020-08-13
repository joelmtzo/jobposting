import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { environment } from "src/environments/environment";
import { DataService } from "./data.service";
import { map, catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class RegistroService extends DataService {
  
  constructor(http: HttpClient, private http2: HttpClient) {
    super(environment.apiUrl + "registro", http);
  }

  /* createUsuario(resource) {
    let headers = new HttpHeaders().set("Content-Type","application/json; charset=utf-8");
    
    return this.http2
      .post(environment.apiUrl + "usuarios", JSON.stringify(resource), { headers, observe: "response" })
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  } */
}
