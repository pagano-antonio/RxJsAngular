
import { Routes } from '@angular/router';
import { ObservableDemo } from './features/observable/observable-demo';
import { SubjectDemo } from './features/subject/subject-demo';
import { BehaviorDemo } from './features/behavior/behavior-demo';
import { Prova } from './esempio/prova/prova';
import { provideHttpClient } from '@angular/common/http';

export const routes: Routes = [
  { path: 'observable', component: ObservableDemo, providers: [provideHttpClient()] },
  { path: 'subject', component: SubjectDemo },
  { path: 'behavior', component: BehaviorDemo },
  { path: 'prova', component: Prova }
];
