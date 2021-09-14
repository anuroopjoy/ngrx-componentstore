import { Injectable } from '@angular/core';
import { ComponentStore } from '@ngrx/component-store';
import { tap } from 'rxjs/operators';

export interface ICheckBoxState {
  checked: boolean;
}

@Injectable()
export class CheckBoxStore extends ComponentStore<ICheckBoxState> {
  constructor() {
    super({
      checked: false,
    });
  }

  readonly valueChanged = this.effect<Event>((event$) => {
    return event$.pipe(
      tap<Event>((evt) => {
        const newValue = (evt.target as HTMLInputElement).checked;
        console.log(newValue);
        this.setValue(newValue);
      })
    );
  });

  readonly setValue = this.updater((state, value: boolean) => ({
    ...state,
    checked: value,
  }));
}
