import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ServiceURLs } from '../common/service-urls';
import { UserLoginRequest } from '../modals/request/user-login-request';
import { UserLoginResponse } from '../modals/response/user-login-response';

@Injectable({
  providedIn: 'root'
})
export class LoginService {

  _userDetails!: UserLoginResponse;

  constructor(private http: HttpClient) { }

  get userInfo(): UserLoginResponse{
    return this._userDetails;
  }

  login(req: UserLoginRequest): Observable<UserLoginResponse> {
    return this.http.post<UserLoginResponse>(ServiceURLs.userLogin, req).pipe(
      tap((res: UserLoginResponse) => {
        if (res.statusCode !== 200) {
          throw res.error?.errorDescription ? res.error.errorDescription : "Unable to fetch User details";
        }
      }),
      tap((res: UserLoginResponse) => this._userDetails = res),
      map((res: UserLoginResponse) => res)
    );
  }
}
