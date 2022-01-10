import {Component, OnInit} from '@angular/core';
import {FormBuilder} from "@angular/forms";
import {takeUntil, tap} from "rxjs/operators";
import {DestroyService} from '../../../services';

@Component({
  selector: 'app-header-search',
  templateUrl: './header-search.component.html',
  styleUrls: ['./header-search.component.less'],
  providers: [DestroyService],
})
export class HeaderSearchComponent implements OnInit {
  value: string | undefined;

  constructor(private fb: FormBuilder, private destroy$: DestroyService) {
  }

  headerSearch = this.fb.group({input: ['']})

  ngOnInit(): void {
    this.headerSearch.get('input')?.valueChanges.pipe(
      tap(value => {
        this.value = value;
      }),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  isDisabled(): boolean {
    return !(this.value && this.value?.length > 3);
  }
}
