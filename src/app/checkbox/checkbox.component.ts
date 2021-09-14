import {
  ChangeDetectionStrategy,
  Component,
  Input,
  OnInit,
  Output,
} from '@angular/core';

import { CheckBoxStore } from './checkbox.store';

@Component({
  selector: 'app-checkbox',
  templateUrl: './checkbox.component.html',
  styleUrls: ['./checkbox.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
  providers: [CheckBoxStore],
})
export class CheckboxComponent implements OnInit {
  @Input() set value(val: boolean) {
    this.store.setValue(val);
  }
  @Output() readonly valueChange = this.store.select((state) => state.checked);
  constructor(private store: CheckBoxStore) {
    // this.store.setState({
    //   checked: false,
    // });
  }

  readonly value$ = this.store.select((state) => state.checked);
  ngOnInit(): void {}

  // valueChanged(evt: Event) {
  // const newValue = (evt.target as HTMLInputElement).checked;
  // console.log(newValue);
  //   this.setValue((evt.target as HTMLInputElement).checked);
  // }

  valueChanged = this.store.valueChanged;
  // setValue(val: boolean) {
  // this.store.patchState({
  //   checked: val,
  // });
  // }
}
