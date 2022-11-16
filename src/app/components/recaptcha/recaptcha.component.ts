import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'audit-recaptcha',
  template: `<re-captcha [siteKey]="recaptchaSiteKey" 
  (resolved)="onCaptchaComplete($event)"></re-captcha>`,
  styleUrls: ['./recaptcha.component.css']
})
export class RecaptchaComponent implements OnInit {

  @Input() recaptchaSiteKey!: string;
  @Output() captchaResponseEvent = new EventEmitter<string>();

  constructor() { }

  ngOnInit(): void {
  }

  onCaptchaComplete(response: any) {
    console.log(response);
    this.captchaResponseEvent.emit(response);
  }

}
