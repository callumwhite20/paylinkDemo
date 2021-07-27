import { Component, OnInit } from '@angular/core';
import { MagicGetterSetter } from 'src/app/magic-getter-setter'

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
  name:unknown;
  age:unknown;

  constructor() {
    let magicGetterSetter = new MagicGetterSetter();
    magicGetterSetter.magicSet('name', 'Bob');
    this.name = magicGetterSetter.magicGet('name');

    magicGetterSetter.magicSet('age', 23);
    this.age = magicGetterSetter.magicGet('age');
  }

  ngOnInit(): void {
  }

}
