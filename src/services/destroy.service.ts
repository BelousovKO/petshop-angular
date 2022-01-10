import {Injectable, OnDestroy} from '@angular/core';
import {Subject} from "rxjs";

@Injectable()
export class DestroyService implements OnDestroy {
  destroy$: Subject<boolean> = new Subject<boolean>();

  ngOnDestroy() {
    this.destroy$.next(true);
    this.destroy$.unsubscribe();
  }
}
