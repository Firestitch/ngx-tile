import { FsTileLabelDirective } from './../../directives/tile-label.directive';
import { FsTileContentDirective } from './../../directives/tile-content.directive';
import { ChangeDetectionStrategy, Component, HostBinding, Input, TemplateRef, ContentChild, OnChanges, OnInit } from '@angular/core';

@Component({
  selector: 'fs-tile',
  templateUrl: 'tile.component.html',
  styleUrls: [ 'tile.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsTileComponent implements OnChanges, OnInit {

  @ContentChild(FsTileContentDirective, { read: TemplateRef, static: true })
  public contentTemplate: TemplateRef<FsTileContentDirective> = null;

  @ContentChild(FsTileLabelDirective, { read: TemplateRef, static: true })
  public labelTemplate: TemplateRef<FsTileLabelDirective> = null;

  @Input() public customClass: string = null;

  @HostBinding('class') class;

  @HostBinding('style.background') styleBackground;

  @Input('background') set background(value) {
    this.styleBackground = value;
  }

  @Input('theme') set theme(value) {
    this._theme = value;
    this.updateClass();
  }

  private _theme: 'dark' | 'light' = 'dark';

  constructor() {
  }

  public updateClass() {
    const classes = ['fs-tile'];
    if (this.customClass) {
      classes.push(this.customClass);
    }

    classes.push(`theme-${this._theme}`);
    this.class = classes.join(' ');
  }

  public ngOnChanges() {
    this.updateClass();
  }

  public ngOnInit() {
    this.updateClass();
  }
}
