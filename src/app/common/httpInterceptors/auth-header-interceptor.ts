import { HttpEvent, HttpHandler, HttpInterceptor, HttpRequest } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { LoginService } from "src/app/services/login.service";

@Injectable()
export class AuthHeaderInterceptor implements HttpInterceptor {

    constructor(private loginService: LoginService) { }

    intercept(req: HttpRequest<any>, next: HttpHandler): Observable<HttpEvent<any>> {
        let clonedReq = req.clone();
        console.log(this.loginService.userInfo);
        if (this.loginService.userInfo && this.loginService.userInfo.Token) {
            clonedReq = req.clone({
                setHeaders: {
                    "APP-NAME": "crpo",
                    "X-AUTH-TOKEN": this.loginService.userInfo.Token,
                    "getS3Payloads": "true"
                }
            });
        }
        console.log(clonedReq);
        return next.handle(clonedReq);
    }
}
