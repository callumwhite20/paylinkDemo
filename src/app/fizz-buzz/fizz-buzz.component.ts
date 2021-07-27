import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-fizz-buzz',
  templateUrl: './fizz-buzz.component.html',
  styleUrls: ['./fizz-buzz.component.scss']
})
export class FizzBuzzComponent implements OnInit {
  public output:Array<string> = [];

  constructor() { }

  private generateOutput(): void {
    for (var i = 1; i <= 20; i++) {
      var row = '';

      if (Number.isInteger(i/3)) {
        row += 'Fizz';
      }

      if (Number.isInteger(i/5)) {
        row += 'Buzz';
      }

      if (row === '') {
        row += i;
      }

      this.output.push(row);
    }
  }

  ngOnInit(): void {
    this.generateOutput();
  }

}
