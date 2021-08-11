import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarMenuService {

  constructor() {}

  menu:string[] = ["Dashboard","Contacts","Setting"];
  menuIconLink:string[] = ["https://img.icons8.com/material-rounded/24/000000/dashboard-layout.png","https://img.icons8.com/material-outlined/24/000000/user--v1.png","https://img.icons8.com/ios-glyphs/30/000000/ellipsis.png"];
  
 

  getMenu():any{
    return [
      {
        "title":"Dashboard",
        "icon":"https://img.icons8.com/material-rounded/24/000000/dashboard-layout.png",
        "routerLink": "home"
      },
      {
        "title":"Contacts",
        "icon":"https://img.icons8.com/material-outlined/24/000000/user--v1.png",
        "routerLink": "contacts"
      },
      {
        "title":"Setting",
        "icon":"https://img.icons8.com/ios-glyphs/30/000000/ellipsis.png",
        "routerLink": "settings"
      }

    ];

  }


}
