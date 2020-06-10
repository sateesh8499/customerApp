import { Component, OnInit } from '@angular/core';

@Component({
    selector: 'app-practice',
    templateUrl: './practice.component.html',
    styleUrls: ['./practice.component.scss'],
})
export class PracticeComponent implements OnInit {

    constructor() { }
    calculate: any;
    firstValue: any;
    secondValue: any;
    result: any;

    ngOnInit() {
    }
    radioGroupChange(event) {
        switch (event) {
            case '+':
                this.result = this.firstValue + this.secondValue;
                console.log(this.result);
                break;
            case '-':
                this.result = this.firstValue - this.secondValue;
                console.log(this.result);
                break;
            case '/':
                this.result = this.firstValue / this.secondValue;
                console.log(this.result);
                break;
            case '*':
                this.result = this.firstValue * this.secondValue;
                console.log(this.result);
                break;
            default:
                break;
        }
    }
}
