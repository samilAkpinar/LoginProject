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
  value: string = "";//formdan gelen email ve şifre değerleri

  required: string = "";
  character: string = "";
  

  constructor( private formService: FormService) {
   }

  
  ngOnInit(): void {
    this.labelState = false;
    console.log("type: "+ this.type);
  }

  
  onFocus():void {
    this.labelState = true;
  }

  
  onBlur() {

    this.labelState = false;
    
    if(this.type == "email"){
      
      this.required = "Email is required";
      //this.txtEmail = this.value;
      console.log("input Email: "+ this.value);
      this.formService.addEmail(this.value);

    }
    else if (this.type == "password") {
      
      this.character = "Password must be at least 8 characters long.";
      this.required = "Password is required";
      //this.txtPassword = this.value;
      console.log("input password: "+ this.value);
      this.formService.addPassword(this.value);

    } else {

      this.formService.addEmail('');
      this.formService.addPassword('');

    }

    
  }

  

  

  





}
