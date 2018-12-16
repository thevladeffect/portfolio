import {AfterViewInit, Component, HostBinding} from '@angular/core';
import {fromEvent} from 'rxjs';
import {distinctUntilChanged, filter, map, pairwise, share, throttleTime} from 'rxjs/operators';
import {animate, state, style, transition, trigger} from '@angular/animations';

enum Direction {
  Up = 'Up',
  Down = 'Down'
}

enum VisibilityState {
  Visible = 'visible',
  Hidden = 'hidden'
}

@Component({
  selector: 'sticky-header',
  templateUrl: './sticky-header.component.html',
  styleUrls: ['./sticky-header.component.scss'],
  animations: [
    trigger('toggle', [
      state(
        VisibilityState.Hidden,
        style({opacity: 0, transform: 'translateY(-100%)'})
      ),
      state(
        VisibilityState.Visible,
        style({opacity: 1, transform: 'translateY(0)'})
      ),
      transition('* => *', animate('200ms ease-in'))
    ])
  ]
})
export class StickyHeaderComponent implements AfterViewInit {
  private isVisible = true;

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

  @HostBinding('@toggle')
  get toggle(): VisibilityState {
    return this.isVisible ? VisibilityState.Visible : VisibilityState.Hidden;
  }
}
