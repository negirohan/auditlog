import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { map, Observable, tap } from 'rxjs';
import { ServiceURLs } from '../common/service-urls';
import { TenantDetailsRequest } from '../modals/request/tenant-details-request';
import { TenantDetailsResponse } from '../modals/response/tenant-details-response';
import { TenantInfo } from '../modals/tenant-info';

@Injectable({
  providedIn: 'root'
})
export class TenantService {

  private _tenantInfo!: TenantInfo;

  constructor(private http: HttpClient) { }

  get tenantInfo(): TenantInfo{
    return this._tenantInfo;
  }

  getTenantDetails(req: TenantDetailsRequest): Observable<TenantInfo> {
    return this.http.post<TenantDetailsResponse>(ServiceURLs.getTenantDetail, req).pipe(
      tap((res: TenantDetailsResponse) => {
        if (res.status_code !== 200) {
          throw res.error?.errorDescription ? res.error.errorDescription : "Unable to fetch Tenant details";
        }
      }),
      tap((res: TenantDetailsResponse) => this._tenantInfo = res.TenantInfo),
      map((res: TenantDetailsResponse) => res.TenantInfo)
    );
  }
}
