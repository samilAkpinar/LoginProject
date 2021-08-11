import { Component, Input, OnInit, Output } from '@angular/core';
import { Router, ActivatedRoute, ParamMap } from '@angular/router';
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
  selected:string='All';

  ngOnInit(): void {
    this.email = localStorage.getItem("email");
    
    this.route.navigate(['/dashboard/home']);

    if(localStorage.getItem("token") == null ){
      
      this.route.navigate(['/']);
    }

  }

  selectedItem(data:string):string {
    this.selected = data;
    return this.selected;
  }

  logout():void{

    localStorage.removeItem("token");
    localStorage.removeItem("email");
    this.route.navigate(['/']);
  }

}
