import {
  ChangeDetectionStrategy, Component, Input, QueryList, AfterContentInit,
  ContentChildren, HostBinding, OnDestroy, ViewEncapsulation,
} from '@angular/core';

import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';

import { FsTileComponent } from '../tile/tile.component';


@Component({
  selector: 'fs-tiles',
  templateUrl: 'tiles.component.html',
  styleUrls: [ 'tiles.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
  encapsulation: ViewEncapsulation.None,
})
export class FsTilesComponent implements AfterContentInit, OnDestroy {

  @HostBinding('class.fs-tiles')
  public fsTiles = true;

  @ContentChildren(FsTileComponent)
  public tiles: QueryList<FsTileComponent>;

  @Input() background;
  @Input() theme;

  private _destroy$ = new Subject();

  constructor() {
  }

  ngAfterContentInit() {
    this._updateTiles();
    this.tiles.changes
    .pipe(
      takeUntil(this._destroy$)
    )
    .subscribe((item) => {
      this._updateTiles();
    });
  }

  public ngOnDestroy() {
    this._destroy$.next(null);
    this._destroy$.complete();
  }

  private _updateTiles() {
    this.tiles.forEach((item: FsTileComponent) => {
      if (this.background) {
        item.background = this.background;
      }

      if (this.theme) {
        item.theme = this.theme;
      }
    });
  }
}
