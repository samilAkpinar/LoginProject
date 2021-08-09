import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormService } from 'src/app/services/form.service';
import { User } from 'src/app/models/User';
import { SnackbarService } from 'src/app/services/snackbar.service';
import { Router } from '@angular/router';
import { stringify } from '@angular/compiler/src/util';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  status!: boolean;
  token!: string;

  constructor(
    private formService : FormService,
    private snackBar: SnackbarService,
    private route:Router
    
    ) { }



  ngOnInit(): void {
    this.status = true;

    //localStorage.removeItem("token"); çıkıs kodu
    
    if(localStorage.getItem("token") != null ){
      
      this.route.navigate(['/dashboard']);
    }
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
    //this.token = data;
      
    if(data == "false"){
      
      this.snackBar.createSnackbar('error',"Bir Hata Oluştu! Lütfen Daha Sonra Tekrar Deneyin! ");
 
    }else{
      
      this.snackBar.createSnackbar('info',"Başarılı Bir Şekilde Giriş Yapılmıştır.");
      localStorage.setItem("token",data);     
      this.route.navigate(['/dashboard']);
    }
      

     },error => {
      this.snackBar.createSnackbar('error',"Bir Hata Oluştu! Lütfen Daha Sonra Tekrar Deneyin! ");
      });
  }

  
  emailSend():void{
    this.formService.forgottenPassword().subscribe(data => {
      
      console.log("Email Değeri ", data);

      if(data == 'true'){

        this.snackBar.createSnackbar('error',"Şifre Değiştirme Epostası Gönderilmiştir.");
      }else{

        this.snackBar.createSnackbar('error',"Hata oluştu!");
      }
      
    },error => {
      this.snackBar.createSnackbar('error',"Bir Hata Oluştu! Lütfen Daha Sonra Tekrar Deneyin! ");
  });

  }

  


  

}
