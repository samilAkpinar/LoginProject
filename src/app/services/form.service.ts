import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Observable, throwError } from 'rxjs';
import { User } from '../models/User';



@Injectable({
  providedIn: 'root'
})
export class FormService {

  email:string = "";
  password:string = "";
  forgotPassword:string = "";

  
  constructor(
    private snackBar: MatSnackBar,
    private http: HttpClient
    ) { }

  createSnackbar(type: string, message: string, duration: number = 4000): void 
  {
    this.snackBar.open(message, '', {
      duration,
      panelClass: type
    });
  }

  addEmail(_email:string) 
  {
    this.email = _email;
  }

  addPassword(_password:string) 
  {
    this.password = _password;
  }

  addForgotPassword(_forgotPassword:string)
  {
    this.forgotPassword = _forgotPassword;
  }

  //email ve password değerleri backend tarafına post edilir ve geriye string değerde token döner.
  send():Observable<any>{

    //backend'e class olarak gönderilir.
    const user = new User(this.email,this.password,"");

    if( this.email != "" && this.password != "" && this.password.length >= 8 )
    {
      const headers = { 'content-type': 'application/json'} 
      return this.http.post("https://localhost:5001/Authorizations/Login " ,user ,{'headers':headers, responseType: 'text'});
      
    }else 
    {
      this.createSnackbar('error',"Eksik veya Hatalı Bir Giriş Yaptınız!");
      return throwError("error");
    }

  }

  forgottenPassword():Observable<any>{
         
    //console.log("forgot email send() " + this.forgotPassword);

    const user = new User(this.forgotPassword,"","");

    const headers = { 'content-type': 'application/json'} 
    return this.http.post("https://localhost:5001/Authorizations/CheckEmail" ,user ,{'headers':headers, responseType: 'text'});

  }

}
