import { Injectable } from '@angular/core';
import { MatSnackBar } from '@angular/material/snack-bar';
import { Login } from '../models/login';


@Injectable({
  providedIn: 'root'
})
export class FormService {

  email:string = "";
  password:string = "";

  

  constructor(private snackBar: MatSnackBar) { }

  createSnackbar(type: string, message: string, duration: number = 4000): void  {
    this.snackBar.open(message, '', {
      duration,
      panelClass: type
    });
  }

  addEmail(_email:string) {
    this.email = _email;
    
  }

  addPassword(_password:string) {
    this.password = _password;
   
  }

  sent(){
    //http ile .net cor'a gidecek ve orada responce olarak bize bir token dönecektir. 
    if(this.email != "" && this.password != "" && this.password.length >= 8 ){

      console.log("gönderildi: email: "+this.email +" password: "+this.password);
    }
    else{
      this.createSnackbar('error',"Error");
      
    }

    
  }


}
