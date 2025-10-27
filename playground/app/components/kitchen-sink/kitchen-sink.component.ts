import { Component } from '@angular/core';
import { KitchenSinkConfigureComponent } from '../kitchen-sink-configure';
import { FsExampleComponent } from '@firestitch/example';
import { FsMessage } from '@firestitch/message';
import { NgTemplateOutlet } from '@angular/common';
import { FsTilesComponent } from '../../../../src/app/components/tiles/tiles.component';
import { FsTileComponent } from '../../../../src/app/components/tile/tile.component';
import { FsTileLabelDirective } from '../../../../src/app/directives/tile-label.directive';
import { FsTileContentDirective } from '../../../../src/app/directives/tile-content.directive';

@Component({
    selector: 'kitchen-sink',
    templateUrl: 'kitchen-sink.component.html',
    styleUrls: ['kitchen-sink.component.scss'],
    standalone: true,
    imports: [NgTemplateOutlet, FsTilesComponent, FsTileComponent, FsTileLabelDirective, FsTileContentDirective]
})
export class KitchenSinkComponent {

  public config = {};
  public test = false;
  constructor(private exampleComponent: FsExampleComponent,
              private message: FsMessage) {

    setTimeout(() => {
      this.test = true;
    },1000)
  }
}
