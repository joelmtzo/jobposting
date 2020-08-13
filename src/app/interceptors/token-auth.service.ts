import { HttpInterceptor } from "@angular/common/http";
import { Injectable } from "@angular/core";

@Injectable()
export class TokenAuthInterceptor implements HttpInterceptor {

  intercept(req, next) {
    let token = localStorage.getItem("token");

    if (token) {
      let reqClone = req.clone({
        setHeaders: { Authorization: token },
      });
      return next.handle(reqClone);
    }

    return next.handle(req);
  }
}
