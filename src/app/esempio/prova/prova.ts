import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent, of } from 'rxjs';
import { debounceTime, delay, map, switchMap } from 'rxjs/operators';

@Component({
  selector: 'app-prova',
  standalone: true,
  imports: [CommonModule],                // <-- necessario per *ngIf
  templateUrl: './prova.html',  // <-- assicurati che il path sia giusto
  styleUrls: ['./prova.scss']
})
export class Prova implements AfterViewInit {
  @ViewChild('searchBox') searchBox!: ElementRef<HTMLInputElement>;
  risultato: string | null = null;

  ngAfterViewInit(): void {

    /*
    //esempio MAP
        of(1, 2, 3)
          .pipe(
            map(x => x * 2)
          )
          .subscribe(val => console.log(val));
    */


    /*
        //esempio switchMap 
        function fakeApi(id: number) {
          return of(`Risultato per id=${id}`).pipe(delay(500));
        }
      of(1, 2, 3)
          .pipe(
            switchMap(id => fakeApi(id)) 
          )
          .subscribe(result => console.log(result));
    */

    //esempio
    const fakeApi = (q: string) => of(`Risultato trovato per: "${q}"`);


    fromEvent<KeyboardEvent>(this.searchBox.nativeElement, 'keyup')
      .pipe(
        debounceTime(500),
        map(ev => (ev.target as HTMLInputElement).value),
        switchMap(q => fakeApi(q))
      )
      .subscribe(res => this.risultato = res);

  }
}
