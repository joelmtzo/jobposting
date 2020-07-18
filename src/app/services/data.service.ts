import { HttpClient, HttpHeaders } from "@angular/common/http";
import { Inject, Injectable } from "@angular/core";
import { throwError } from 'rxjs';
import { catchError, map } from 'rxjs/operators';
import { AppError } from "./../common/app-error";
import { BadInput } from "./../common/bad-input";
import { NotFoundError } from "./../common/not-found-error";

@Injectable()
export class DataService {
  constructor(@Inject('API_BASE_URL') private url: string, private http: HttpClient) {}

  getById(id) {
    return this.http
      .get(this.url + id)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  getAll() {
    return this.http
      .get(this.url)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  create(resource) {
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/json; charset=utf-8"
    );
    return this.http
      .post(this.url, JSON.stringify(resource), { headers, observe: 'response' })
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  update(id, resource) {
    let headers = new HttpHeaders().set(
      "Content-Type",
      "application/json; charset=utf-8"
    );
    return this.http
      .put(this.url + "/" + id, JSON.stringify( resource ), { headers, observe: 'response' })
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  delete(id) {
    return this.http
      .delete(this.url + "/" + id)
      .pipe(
        map(response => response),
        catchError(this.handleError)
      );
  }

  handleError(error: Response) {
    if (error.status === 400) return throwError(new BadInput(error));

    if (error.status === 404) return throwError(new NotFoundError());

    if (error.status === 404) return throwError(new NotFoundError());

    return throwError(new AppError(error));
  }
}
