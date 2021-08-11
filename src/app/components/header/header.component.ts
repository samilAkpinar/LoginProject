import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {

  constructor(
    private formService: FormService,
    private route:Router
    ) { }

  email:any;

  ngOnInit(): void {
    this.email = localStorage.getItem("email");
    
  }


  logout():void{

    localStorage.removeItem("token");
    localStorage.removeItem("email");
    this.route.navigate(['/']);
  }

}
