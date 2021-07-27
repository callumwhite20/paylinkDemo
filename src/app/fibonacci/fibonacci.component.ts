import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fibonacci',
  templateUrl: './fibonacci.component.html',
  styleUrls: ['./fibonacci.component.scss']
})
export class FibonacciComponent implements OnInit {
  public five:number;
  public ten:number;
  public one:number;

  constructor() {
    this.five = this.fibonacci(5);
    this.ten = this.fibonacci(10);
    this.one = this.fibonacci(1);
  }

  public fibonacci(num:number):number {  
    if (num <= 1) return 1;
  
    return this.fibonacci(num - 1) + this.fibonacci(num - 2);
  }

  ngOnInit(): void {
  }

}
