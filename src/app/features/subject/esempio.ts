import { Subject } from 'rxjs';

const subject = new Subject<number>();

subject.subscribe(val => console.log('A:', val));

subject.next(1); // A: 1
subject.next(2); // A: 2

subject.subscribe(val => console.log('B:', val)); // B non riceve 1 e 2

subject.next(3); // A: 3, B: 3
