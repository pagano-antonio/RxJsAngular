import { Component, ElementRef, ViewChild, AfterViewInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { fromEvent, of } from 'rxjs';
import { debounceTime, map, switchMap } from 'rxjs/operators';

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
