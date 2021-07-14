import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  status!: boolean;


  constructor() { }

  ngOnInit(): void {
    this.status = true;
  }

  loginPageShow(){
    this.status = true;
  }

  forgotPasswordPageShow() {
    this.status = false;
  }

}
