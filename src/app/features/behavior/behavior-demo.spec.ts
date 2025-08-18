import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BehaviorDemo } from './behavior-demo';

describe('BehaviorDemo', () => {
  let component: BehaviorDemo;
  let fixture: ComponentFixture<BehaviorDemo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [BehaviorDemo]
    })
    .compileComponents();

    fixture = TestBed.createComponent(BehaviorDemo);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
