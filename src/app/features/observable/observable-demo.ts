import { Component, OnInit } from '@angular/core';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  imports: [],
  templateUrl: './observable-demo.html',
  styleUrl: './observable-demo.scss'
})
export class ObservableDemo implements OnInit {
  value!: number;

  ngOnInit() {
/*
  Observable di tipo number.
La funzione passata all’Observable riceve un observer → un 
oggetto che ha metodi come:
next(val) → emette un valore ai sottoscrittori.
error(err) → segnala un errore.
complete() → chiude lo stream.
usiamo setInterval per inviare ogni secondo (1000 ms) 
il valore count, che parte da 0 e cresce di 1.
*/  
const myObservable = new Observable<number>(observer => {
      let count = 0;
      setInterval(() => {
        observer.next(count++);
      }, 1000);
    });

    myObservable.subscribe(val => this.value = val);
  }
}

 
