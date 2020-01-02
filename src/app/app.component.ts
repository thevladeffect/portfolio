import {Component, OnInit, ViewChild} from '@angular/core';
import {HeaderComponent} from './header/header.component';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  @ViewChild(HeaderComponent, { static: true }) header: HeaderComponent;

  constructor() {
  }

  ngOnInit(): void {
  }
}
