import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, scan } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-subject-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subject-demo.html',
  styleUrls: ['./subject-demo.scss']
})
export class SubjectDemo {
  // il nostro "bus di messaggi" per trasmettere stringhe ai subscriber
  private bus$ = new Subject<string>();

  // riferimento al ciclo di vita, usato per fermare sottoscrizioni
  private destroyRef = inject(DestroyRef);

  // testo attuale nell’input
  text = '';

  // messaggi ricevuti dal primo subscriber
  list1: string[] = [];

  // messaggi ricevuti dal secondo subscriber (quello tardivo)
  list2: string[] = [];

  // semplice variabile booleana per gestire il secondo subscriber
  lateReceiver = false;

  constructor() {
    // Receiver #1: si iscrive subito
    this.bus$
      .pipe(
        scan((acc, m) => [...acc, m], [] as string[]),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(arr => (this.list1 = arr));
  }

  send() {
    const msg = this.text.trim();
    if (!msg) return;
    this.bus$.next(msg);
    this.text = '';
  }

  addLateReceiver() {
    this.lateReceiver = true;

    // Receiver #2: si iscrive solo da qui in poi
    this.bus$
      .pipe(
        scan((acc, m) => [...acc, m], [] as string[]),
        takeUntilDestroyed(this.destroyRef)
      )
      .subscribe(arr => (this.list2 = arr));
  }
}
