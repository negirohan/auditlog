import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { TenantDetailsRequest } from 'src/app/modals/request/tenant-details-request';
import { TenantService } from 'src/app/services/tenant.service';
import { faBookmark } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'audit-tenantalias',
  templateUrl: './tenantalias.component.html',
  styleUrls: ['./tenantalias.component.css']
})
export class TenantaliasComponent implements OnInit {

  fabookmark = faBookmark;

  @ViewChild("tenantAlias") tenantAlias!: ElementRef;

  errorMsg!: string;

  constructor(tenantAlias: ElementRef, private tenantService: TenantService, private router: Router) {

  }

  ngOnInit(): void {
  }

  submit(): void {
    console.log(this.tenantAlias.nativeElement.value);
    let req: TenantDetailsRequest = {
      TenantAlias: this.tenantAlias.nativeElement.value
    };
    this.tenantService.getTenantDetails(req).subscribe({
      next: (res) => {console.log(this.tenantService.tenantInfo); this.router.navigate(['/login']);},
      error: (error) => {console.error(error); this.errorMsg = error},
      complete: () => console.log("completed")
    });
  }

}
