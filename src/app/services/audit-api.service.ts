import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ServiceURLs } from '../common/service-urls';
import { ApiDetailInfo } from '../modals/api-detail-info';
import { ApiDetailsRequest } from '../modals/request/api-details-request';
import { ApiDetailsResponse } from '../modals/response/api-details-response';

@Injectable({
  providedIn: 'root'
})
export class AuditApiService {

  constructor(private http: HttpClient) { }

  getApiDetails(req: ApiDetailsRequest): Observable<ApiDetailInfo> {
    return this.http.post<ApiDetailsResponse>(ServiceURLs.getTenantDetail, req).pipe(
      tap((res: ApiDetailsResponse) => {
        if (res.status !== 'OK') {
          throw res.error?.errorDescription ? res.error.errorDescription : "Unable to fetch api details";
        }
      }),
      map((res: ApiDetailsResponse) => res.data)
    );
  }
}
