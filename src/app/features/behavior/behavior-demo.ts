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

  // BehaviorSubject con valore iniziale
  private counter$ = new BehaviorSubject<number>(0);

  // liste per mostrare i dati ricevuti
  list1: number[] = [];
  list2: number[] = [];

  // flag per abbonare il secondo subscriber in ritardo
  lateSubscribed = false;

  constructor() {
    // Primo subscriber: riceve da subito i valori
    this.counter$.subscribe(val => this.list1.push(val));
  }

  increment() {
    // emette un nuovo valore
    const next = this.counter$.value + 1;   // .value prende l'ultimo stato
    this.counter$.next(next);
  }

  subscribeLate() {
    if (!this.lateSubscribed) {
      this.counter$.subscribe(val => this.list2.push(val));
      this.lateSubscribed = true;
    }
  }
}
