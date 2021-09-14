import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-componentstore';

  value = false;
  result = '';

  ngOnInit(): void {
    this.value = true;
    this.printValue(true);
  }
  printValue(val: boolean) {
    this.result = val ? 'checked' : 'unchecked';
  }
}
