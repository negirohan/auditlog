import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { UserLoginRequest } from 'src/app/modals/request/user-login-request';
import { LoginService } from 'src/app/services/login.service';
import { TenantService } from 'src/app/services/tenant.service';

@Component({
  selector: 'audit-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  @ViewChild("userName") userName!: ElementRef;
  @ViewChild("password") password!: ElementRef;
  
  recaptchaKey!: string;
  isRecaptchaChecked: boolean = false;

  private recaptchaResponse!: string;

  constructor(private router: Router, private loginService: LoginService, private tenantService: TenantService, userName: ElementRef, password: ElementRef) { }

  ngOnInit(): void {
    if (!this.tenantService.tenantInfo) {
      this.router.navigate(['/']);
    } else if (this.tenantService.tenantInfo.ui_recapcha_key) {
      this.recaptchaKey = this.tenantService.tenantInfo.ui_recapcha_key;
    }
  }

  onCaptchaResponse(captchaResponse: string): void {
    this.isRecaptchaChecked = true;
    this.recaptchaResponse = captchaResponse;
  }

  submit(): void {
    let req: UserLoginRequest = {
      LoginName: this.userName.nativeElement.value,
      UserName: this.userName.nativeElement.value,
      Password: this.password.nativeElement.value,
      TenantAlias: this.tenantService.tenantInfo.alias,
      uiCaptchaKey: this.recaptchaKey,
      googleRecaptchaResponse: this.recaptchaResponse
    };
    this.loginService.login(req).subscribe({
      next: (res) => {console.log(res); this.router.navigate(['/home']);},
      error: (error) => console.error(error),
      complete: () => console.log("completed")
    });
  }

}
