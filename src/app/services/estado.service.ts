import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { catchError, map } from "rxjs/operators";
import { environment } from "src/environments/environment";
import { DataService } from "./data.service";

@Injectable({ providedIn: "root" })
export class EstadoService extends DataService {
  constructor(http: HttpClient, private http2: HttpClient) {
    super(environment.apiUrl + "estados/", http);
  }

  getEstados() {
    return this.http2.get(environment.apiUrl + "estados?size=32")
    .pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }
}
