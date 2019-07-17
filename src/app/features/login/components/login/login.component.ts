import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {


  @Input() username: string;
  @Input() password: string;
  @Input() loginFailed = false;

  @Output() clickLoginWithEmail = new EventEmitter();
  @Output() clickRegister = new EventEmitter();
  @Output() clickLoginWithFB = new EventEmitter();

  constructor() { }

  ngOnInit() {
}

  loginWithEmail() {
    const body = {
      username: this.username,
      password: this.password
    };
    this.clickLoginWithEmail.emit(body);
  }

  register() {
    this.clickRegister.emit();
  }

  loginWithFB() {
    this.clickLoginWithFB.emit();
  }

}
