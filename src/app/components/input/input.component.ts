import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-input',
  templateUrl: './input.component.html',
  styleUrls: ['./input.component.scss']
})
export class InputComponent implements OnInit {


  @Input() type: string = "";
  @Input() label: string = "";
  @Input() placeholder: string = "";

  labelState!: boolean;

  constructor() { }

  ngOnInit(): void {
    this.labelState = false;
  }

  //onClik olayında state tutulacak
  onFocus():void {
    this.labelState = true;
  }

  onBlur() {
    this.labelState = false;
  }

}
