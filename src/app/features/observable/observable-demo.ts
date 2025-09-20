import { HttpClient } from '@angular/common/http';
import { Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { fromEvent, Observable, shareReplay } from 'rxjs';

@Component({
  selector: 'app-observable-demo',
  imports: [],
  templateUrl: './observable-demo.html',
  styleUrl: './observable-demo.scss'
})
export class ObservableDemo implements OnInit {
  value!: number;
  @ViewChild('myBtn', { static: true }) button!: ElementRef<HTMLButtonElement>;

  constructor(private http: HttpClient) { }

  ngOnInit() {


    /*
    // primo esempio Cold
        const obs$ = this.http.get('https://jsonplaceholder.typicode.com/users/1');
    
        obs$.subscribe(data => console.log('Subscriber 1:', data));
        obs$.subscribe(data => console.log('Subscriber 2:', data));
        // Verranno fatte DUE chiamate HTTP separate
    */

    /*
          //2 esempio COLD
      const obs$ = new Observable(observer => {
        observer.next('uno');
        observer.next('due');
        observer.complete();
      });
  
      obs$.subscribe(value => console.log(value));
      obs$.subscribe(value => console.log("2 chiamata " + value));
  */


    /*
  //3 esempio cold
  const myObservable = new Observable<number>(observer => {
    let count = 0;
    setInterval(() => {
      observer.next(count++);
    }, 1000);
  });

  myObservable.subscribe(val => this.value = val);
*/

    /*
        //esempio Hot
        // Trasformo il click in un Observable Hot
        const clicks$ = fromEvent<MouseEvent>(this.button.nativeElement, 'click');
    
        // Primo subscriber
        clicks$.subscribe(e => console.log('Subscriber 1:', e));
    
        // Secondo subscriber
        clicks$.subscribe(e => console.log('Subscriber 2:', e));
      
      */

    /*
            //1 esempio COLD HOT
        //const obs$ = this.http.get('https://jsonplaceholder.typicode.com/users/1');
        const obs$ = this.http.get('https://jsonplaceholder.typicode.com/users/1').pipe(
          shareReplay(1)
        );
        obs$.subscribe(data => console.log('Subscriber 1:', data));
        obs$.subscribe(data => console.log('Subscriber 2:', data));
        // Verranno fatte UNA chiamate HTTP separate
    */



  }

}


