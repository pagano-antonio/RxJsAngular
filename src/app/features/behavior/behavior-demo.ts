import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-behavior-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './behavior-demo.html',
  styleUrls: ['./behavior-demo.scss']
})
export class BehaviorDemo {

  private counter$ = new BehaviorSubject<number>(0);

  list1: number[] = [];
  list2: number[] = [];

  lateSubscribed = false;

  constructor() {
    this.counter$.subscribe(val => this.list1.push(val));
  }

  increment() {

    const next = this.counter$.value + 1;
    this.counter$.next(next);
  }

  subscribeLate() {
    if (!this.lateSubscribed) {
      this.counter$.subscribe(val => this.list2.push(val));
      this.lateSubscribed = true;
    }
  }
}
