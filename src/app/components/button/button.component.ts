import { Component, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-button',
  templateUrl: './button.component.html',
  styleUrls: ['./button.component.scss']
})
export class ButtonComponent implements OnInit {

  @Input() text: string = "";
  @Input() classItem: string = "";
  


  constructor() { }

  ngOnInit(): void {
  }


  
  onClickHandler() {

  }

  

}
