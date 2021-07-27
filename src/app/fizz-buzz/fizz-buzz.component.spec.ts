import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FizzBuzzComponent } from './fizz-buzz.component';

describe('FizzBuzzComponent', () => {
  let component: FizzBuzzComponent;
  let fixture: ComponentFixture<FizzBuzzComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FizzBuzzComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FizzBuzzComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should correctly return output', () => {
    const fizzBuzz = [
      '1',
      '2',
      'Fizz',
      '4',
      'Buzz',
      'Fizz',
      '7',
      '8',
      'Fizz',
      'Buzz',
      '11',
      'Fizz',
      '13',
      '14',
      'FizzBuzz',
      '16',
      '17',
      'Fizz',
      '19',
      'Buzz',
    ];

    expect(component.output).toEqual(fizzBuzz);
  });
});
