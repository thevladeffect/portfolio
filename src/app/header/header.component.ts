import {AfterViewInit, Component} from '@angular/core';
import {fromEvent} from 'rxjs';
import {distinctUntilChanged, filter, map, pairwise, share} from 'rxjs/operators';

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

@Component({
  selector: 'header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements AfterViewInit {
  public isVisible = true;

  ngAfterViewInit(): void {
    const scroll$ = fromEvent(window, 'scroll').pipe(
      map(() => window.pageYOffset),
      pairwise(),
      map(([y1, y2]): Direction => (y2 < y1 ? Direction.Up : Direction.Down)),
      distinctUntilChanged(),
      share()
    );

    const scrollUp$ = scroll$.pipe(
      filter(direction => direction === Direction.Up)
    );

    const scrollDown$ = scroll$.pipe(
      filter(direction => direction === Direction.Down)
    );

    scrollUp$.subscribe(() => (this.isVisible = true));
    scrollDown$.subscribe(() => (this.isVisible = false));
  }
}
