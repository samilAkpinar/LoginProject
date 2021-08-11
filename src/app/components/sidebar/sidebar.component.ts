import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { SidebarMenuService } from 'src/app/services/sidebar-menu.service';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss']
})
export class SidebarComponent implements OnInit {
  posts:any;
  name!:string;

  constructor(
    private menuService:SidebarMenuService,
    private routes:ActivatedRoute
    ) {
    
    this.posts = this.menuService.getMenu();
   }

  ngOnInit(): void {
    console.log("deneme " , this.posts);

    this.routes.params.subscribe(p=>{
      this.name = p['name']
    });
    console.log("name", this.name);
  }

  
  
}
