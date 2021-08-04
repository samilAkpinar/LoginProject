import { Component, Input, OnInit } from '@angular/core';
import { FormService } from 'src/app/services/form.service';


@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {


  @Input() type: string = ""; 
  @Input() label: string = "";
  @Input() placeholder: string = "";
  
  
  labelState!: boolean; //input focus durumundaki style değişimidir.
  value: string = "";//formdan gelen email ve şifre değerleridir.

  required: string = "";
  character: string = "";
  

  constructor( private formService: FormService) {
   }

  
  ngOnInit(): void {
    this.labelState = false;
  }

  
  onFocus():void {
    this.labelState = true;
  }


  validateEmail(email:string): boolean{
    
    const regularExpression = /^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    return regularExpression.test(String(email).toLowerCase());
  }

  onBlur():any {

    this.labelState = false;
    
    if(this.type == "email"){
      
      var validateEmail = this.validateEmail(this.value);
      this.required = "Email is required";

      if(!validateEmail){

        this.formService.addEmail('');
        this.formService.addForgotPassword('');

      }else{

        this.required = "Email is required";
        this.formService.addEmail(this.value);  
        this.formService.addForgotPassword(this.value);  

      }

      
    }
    else if (this.type == "password") {
      
      this.character = "Password must be at least 8 characters long.";
      this.required = "Password is required";
      this.formService.addPassword(this.value);

    } else {

      this.formService.addEmail('');
      this.formService.addPassword('');

    }

  }

}
