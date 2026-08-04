import { FsTileLabelDirective } from './../../directives/tile-label.directive';
import { FsTileContentDirective } from './../../directives/tile-content.directive';
import {
  ChangeDetectionStrategy, Component, HostBinding, Input, TemplateRef,
  ContentChild, OnChanges, OnInit, ViewEncapsulation,
} from '@angular/core';
import { NgTemplateOutlet } from '@angular/common';

@Component({
    selector: 'fs-tile',
    templateUrl: 'tile.component.html',
    styleUrls: ['tile.component.scss'],
    changeDetection: ChangeDetectionStrategy.OnPush,
    encapsulation: ViewEncapsulation.None,
    standalone: true,
    imports: [NgTemplateOutlet],
})
export class FsTileComponent implements OnChanges, OnInit {

  @ContentChild(FsTileContentDirective, { read: TemplateRef, static: true })
  public contentTemplate: TemplateRef<FsTileContentDirective> = null;

  @ContentChild(FsTileLabelDirective, { read: TemplateRef, static: true })
  public labelTemplate: TemplateRef<FsTileLabelDirective> = null;

  @Input() public customClass: string = null;

  /**
   * The tile's own background and text color, applied inline to the wrapper and
   * to the label/content. Inline so they win over the app's theme, which colors
   * .theme-dark .wrapper from the Material primary palette.
   */
  @Input() public backgroundColor: string = null;

  @HostBinding('class') class;

  /**
   * An explicit color always wins. Otherwise a tile given its own background
   * picks black or white text by YIQ contrast — the same rule fs-chip uses —
   * because the theme's white-on-dark default is unreadable on a light one.
   * With no background at all, the theme's own colors apply.
   */
  public get textColor(): string {
    if (!this.backgroundColor) {
      return null;
    }

    return this.isContrastYIQBlack(this.backgroundColor) ? '#393C4A' : '#fff';
  }

  @Input() public set theme(value: 'dark' | 'light') {
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

  private isContrastYIQBlack(hexcolor: string): boolean {
    const hex = hexcolor.replace('#', '');
    const r = parseInt(hex.substr(0, 2), 16);
    const g = parseInt(hex.substr(2, 2), 16);
    const b = parseInt(hex.substr(4, 2), 16);
    const yiq = ((r * 299) + (g * 587) + (b * 114)) / 1000;

    return yiq >= 200;
  }
}
