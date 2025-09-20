import { Component, DestroyRef, inject } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';
import { Subject, of, scan } from 'rxjs';
import { takeUntilDestroyed } from '@angular/core/rxjs-interop';

@Component({
  selector: 'app-subject-demo',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './subject-demo.html',
  styleUrls: ['./subject-demo.scss']
})
export class SubjectDemo {










  private bus$ = new Subject<string>();

  private destroyRef = inject(DestroyRef);

  text = '';

  list1: string[] = [];

  list2: string[] = [];

  lateReceiver = false;

  constructor() {
    /*
        //1 esempio
        const subject = new Subject<number>();
    
        subject.subscribe(val => console.log('A:', val));
    
        subject.next(1); // A: 1
        subject.next(2); // A: 2
    
        subject.subscribe(val => console.log('B:', val)); // B non riceve 1 e 2
    
        subject.next(3); // A: 3, B: 3
    */

    /*
        //1 esempio scan
        of(1, 2, 3).pipe(
          scan((acc, val) => acc + val, 0)   
        ).subscribe(console.log);
    */

    /*
    // Esempio 2: senza seed
    of(1, 2, 3).pipe(
      scan((acc, val) => acc + val)      // parte da 1 (primo valore)
    ).subscribe(console.log);
*/

    /*
        //Esempio 3
        of('a', 'b', 'c').pipe(
          scan((acc, val) => [...acc, val], [] as string[])
        ).subscribe(console.log);
    */


    /// esempio COMPLETO
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
