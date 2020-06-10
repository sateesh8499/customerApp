import { EventEmitter } from 'protractor';
import { Component, OnInit, Input, Output } from '@angular/core';

@Component({
  selector: 'app-child',
  templateUrl: './child.component.html',
  styleUrls: ['./child.component.scss'],
})
export class ChildComponent implements OnInit {

  constructor() { }
  @Input() public parentData;
  ngOnInit() {
      console.log(this.parentData);
  }
  fireEvent(){
  }

}
