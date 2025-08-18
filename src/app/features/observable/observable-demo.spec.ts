import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ObservableDemo } from './observable-demo';

describe('ObservableDemo', () => {
  let component: ObservableDemo;
  let fixture: ComponentFixture<ObservableDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [ObservableDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ObservableDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
