import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FibonacciComponent } from './fibonacci.component';

describe('FibonacciComponent', () => {
  let component: FibonacciComponent;
  let fixture: ComponentFixture<FibonacciComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FibonacciComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FibonacciComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });

  it('should return correct values', () => {
    expect(component.fibonacci(5)).toEqual(8);
    expect(component.fibonacci(10)).toEqual(89);
    expect(component.fibonacci(1)).toEqual(1);
  });
});
