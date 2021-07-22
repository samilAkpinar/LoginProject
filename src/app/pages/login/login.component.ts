import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormService } from 'src/app/services/form.service';


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

  ngOnInit(): void {
    this.status = true;
    this.getValues().subscribe(data =>{
        this.getir = data
    })
  }

  loginPageShow(){
    this.status = true;
  }

  forgotPasswordPageShow() {
    this.status = false;
  }

  getValues() {
    
    return this.http.get("https://localhost:5001/login");
    
  }

  postAdd() {
    //return this.http.post()
    //verileri console.log ile göster
    
    //console.log("ok")
    //console.log("txtEmail ")
  }

  //servis kullanılması gerekli
  send():void {
    this.formService.sent();
  }


  

}
