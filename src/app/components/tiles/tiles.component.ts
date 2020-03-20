import { ChangeDetectionStrategy, Component, Input, QueryList, AfterContentInit, ContentChildren, HostBinding, OnDestroy } from '@angular/core';
import { FsTileComponent } from '../tile/tile.component';
import { Subject } from 'rxjs';
import { takeUntil } from 'rxjs/operators';


@Component({
  selector: 'fs-tiles',
  templateUrl: 'tiles.component.html',
  styleUrls: [ 'tiles.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsTilesComponent implements AfterContentInit, OnDestroy {

  @HostBinding('class.fs-tiles') fsTiles = true;

  @ContentChildren(FsTileComponent) tiles: QueryList<FsTileComponent>;

  @Input() background;

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
    this._destroy$.next();
    this._destroy$.complete();
  }

  private _updateTiles() {
    this.tiles.forEach((item: FsTileComponent) => {
      item.background = this.background;
    });
  }
}
