import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { FormService } from 'src/app/services/form.service';
import { User } from 'src/app/models/User';
import { SnackbarService } from 'src/app/services/snackbar.service';


@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  status!: boolean;

  constructor(
    private formService : FormService,
    private snackBar: SnackbarService
    
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
    console.log("Token değeri: " +this.token);
    this.snackBar.createSnackbar('info',"Başarılı Bir Şekilde Giriş Yapılmıştır.");

     },error => {
      this.snackBar.createSnackbar('error',"Bir Hata Oluştu! Lütfen Daha Sonra Tekrar Deneyin! ");
      });
  }

  
  emailSend():void{
    this.formService.forgottenPassword().subscribe(data => {
      
      //console.log("Email Değeri ", data);

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
