import { Injectable } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Injectable({ providedIn: 'root' })
export class StateService {
  private unterthemaSource = new BehaviorSubject<string>(''); // ist schon vorhanden
  unterthema$ = this.unterthemaSource.asObservable();

  private pruefungSource = new BehaviorSubject<string>('');
  pruefung$ = this.pruefungSource.asObservable();

  private themaSource = new BehaviorSubject<string>('');
  thema$ = this.themaSource.asObservable();

  setUnterthema(name: string) {
    this.unterthemaSource.next(name);
  }

  setPruefung(name: string) {
    this.pruefungSource.next(name);
  }

  setThema(name: string) {
    this.themaSource.next(name);
  }
}
