import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StateService {
  private unterthemaSource = new BehaviorSubject<string>('Programmierung'); // Startwert
  unterthema$ = this.unterthemaSource.asObservable();

  setUnterthema(name: string) {
    this.unterthemaSource.next(name);
  }
}
