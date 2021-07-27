import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormService } from 'src/app/services/form.service';
import { User } from 'src/app/models/User';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  status!: boolean;

  constructor(
    private http:HttpClient,
    private formService : FormService
    ) { }


  getir!: any;
  token!: string;

  ngOnInit(): void {
    this.status = true;
  }

  loginPageShow(){
    this.status = true;
  }

  forgotPasswordPageShow() {
    this.status = false;
  }

  

  

  //button click fonksiyonu token değeri alınır.
  send():void {
    this.formService.send().subscribe(data => {
    this.token = data;
     });
  }


  

}
