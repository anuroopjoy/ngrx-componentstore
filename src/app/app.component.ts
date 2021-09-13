import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  title = 'ngrx-componentstore';

  value = false;

  ngOnInit(): void {
    this.value = true;
  }
  printValue(val: boolean) {
    this.value = val;
  }
}
