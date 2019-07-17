import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { UserService } from './../../../../core/user/services/user.service';

@Component({
  selector: 'app-login-view',
  templateUrl: './login.view.html',
  styleUrls: ['./login.view.scss']
})
export class LoginView implements OnInit {

  username: string;
  password: string;
  loginFailed = false;

  constructor(private router: Router,
    private userService: UserService) { 
    
  }

  ngOnInit() {
    
  }

  loginWithEmail(event) {
    this.userService.login('', '');
    this.router.navigate(['']);
  }

}
