import { formatDate } from '@angular/common';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { ApiDetailsRequest } from 'src/app/modals/request/api-details-request';
import { TenantService } from 'src/app/services/tenant.service';
import { AuditApiService } from 'src/app/services/audit-api.service';

@Component({
  selector: 'audit-dataview',
  templateUrl: './dataview.component.html',
  styleUrls: ['./dataview.component.css']
})
export class DataviewComponent implements OnInit {

  @ViewChild("testUserId") testUserId!: ElementRef;
  @ViewChild("testFromDate") testFromDate!: ElementRef;
  // @ViewChild("testToDate") testToDate!: ElementRef;
  @ViewChild("fetchDataFromES") fetchDataFromES!: ElementRef;

  constructor(private tenantService: TenantService, private auditApiService: AuditApiService, testUserId: ElementRef, testFromDate: ElementRef, fetchDataFromES: ElementRef) { } //, testToDate: ElementRef

  ngOnInit(): void {
  }

  submit(): void {
    let fromDate = this.testFromDate.nativeElement.value,
      date=new Date(fromDate);
    let fromDateStr = formatDate(fromDate, 'dd-MM-yyyy', 'en-US');

    console.log(this.testUserId.nativeElement.value);
    console.log(this.testFromDate.nativeElement.value);
    console.log(fromDateStr);
    // console.log(this.testToDate.nativeElement.value);
    console.log(this.fetchDataFromES.nativeElement.value);

    let req: ApiDetailsRequest = {
      IsResponsePayloadIncluded: true,
      appNames: [],
      getS3Payloads: true,
      pagination: {
        pageSize: 200
      },
      tenantAlias: this.tenantService.tenantInfo.alias,
      userIds: [Number(this.testUserId.nativeElement.value)],
      invokedDates: [fromDateStr],
      fetchDataFromES: this.fetchDataFromES.nativeElement.value === 'true' ? true : false
    };
    this.auditApiService.getApiDetails(req).subscribe({
      next: (res) => {console.log(res);},
      error: (error) => console.error(error),
      complete: () => console.log("completed")
    });
  }

}
