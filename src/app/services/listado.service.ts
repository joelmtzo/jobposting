import { Injectable } from "@angular/core";
import { DataService } from "./data.service";
import { HttpClient } from "@angular/common/http";
import { environment } from "../../environments/environment";
import { map, catchError } from "rxjs/operators";

@Injectable({ providedIn: "root" })
export class ListadoService extends DataService {
  endpoint = environment.apiUrl + "vacantes";

  constructor(http: HttpClient, private http2: HttpClient) {
    super(environment.apiUrl + "vacantes", http);
  }

  getListadoWithPagination(pagination) {
    let callUrl = (pagination) ? pagination : `${this.endpoint}?page=0&size=10`;
    return this.http2.get(callUrl)
    .pipe(
      map((response) => response),
      catchError(this.handleError)
    );
  }
}
