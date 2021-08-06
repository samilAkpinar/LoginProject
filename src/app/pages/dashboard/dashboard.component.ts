import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { FormService } from 'src/app/services/form.service';

import { CommonModule } from '@angular/common';
import { NgModule } from '@angular/core';


@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})
export class DashboardComponent implements OnInit {

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
