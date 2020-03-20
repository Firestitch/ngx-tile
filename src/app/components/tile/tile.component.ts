import { FsTileLabelDirective } from './../../directives/tile-label.directive';
import { FsTileContentDirective } from './../../directives/tile-content.directive';
import { ChangeDetectionStrategy, Component, HostBinding, Input, TemplateRef, ViewChild, ContentChild } from '@angular/core';

@Component({
  selector: 'fs-tile',
  templateUrl: 'tile.component.html',
  styleUrls: [ 'tile.component.scss' ],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class FsTileComponent {

  @ContentChild(FsTileContentDirective, { read: TemplateRef, static: true })
  public contentTemplate: TemplateRef<FsTileContentDirective> = null;

  @ContentChild(FsTileLabelDirective, { read: TemplateRef, static: true })
  public labelTemplate: TemplateRef<FsTileLabelDirective> = null;

  @HostBinding('class.fs-tile') fsTile = true;

  @HostBinding('style.background') styleBackground;

  @Input('background') set background(value) {
    this.styleBackground = value;
  }

  constructor() {
  }
}
