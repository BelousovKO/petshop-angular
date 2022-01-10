import {Injectable, OnDestroy} from '@angular/core';
import {Observable, Subject} from "rxjs";

@Injectable({
  providedIn: 'root',
})
export class DestroyService extends Observable<void> implements OnDestroy {
  private readonly _onDestroy$ = new Subject<void>();

  constructor() {
    super(subscriber => this._onDestroy$.subscribe(subscriber));
  }

  ngOnDestroy() {
    this._onDestroy$.next();
    this._onDestroy$.complete();
  }
}
