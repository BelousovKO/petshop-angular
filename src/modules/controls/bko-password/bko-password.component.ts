import {Component, forwardRef, Input, OnInit} from '@angular/core';
import {ControlValueAccessor, FormBuilder, NG_VALUE_ACCESSOR} from "@angular/forms";
import {takeUntil, tap} from "rxjs/operators";
import {DestroyService} from "../../../services";

enum Types {
  Password = 'password',
  Text = 'text'
}

@Component({
  selector: 'bko-password',
  templateUrl: './bko-password.component.html',
  styleUrls: ['./bko-password.component.less'],
  providers: [
    {
    provide: NG_VALUE_ACCESSOR,
    useExisting: forwardRef(() => BkoPasswordComponent),
    multi: true
  },
    DestroyService
  ]
})
export class BkoPasswordComponent implements ControlValueAccessor, OnInit {
  passwordType = Types.Password;

  constructor(private fb: FormBuilder, private destroy$: DestroyService) {
  }

  customInput = this.fb.group({input: ['']});

  private _value: string | undefined;

  get value(): string | undefined {
    return this._value;
  }

  @Input()
  set value(val: string | undefined) {
    this._value = val;
    this.onChange(this._value);
  }

  ngOnInit(): void {
    this.customInput.valueChanges.pipe(
      tap(e => {
        this.value = e.input;
      }),
      takeUntil(this.destroy$)
    ).subscribe()
  }

  onChange(_: string | undefined): void {}

  isPassword(): boolean {
    return this.passwordType === Types.Password
  }

  writeValue(value: string) {
    this.value = value;
  }

  registerOnChange(fn: any) {
    this.onChange = fn;
  }

  registerOnTouched() {}

  toggleType(): void {
    this.passwordType = this.passwordType === Types.Password ? Types.Text : Types.Password;
  }
}
