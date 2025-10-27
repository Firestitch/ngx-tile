import { FsTileLabelDirective } from './directives/tile-label.directive';
import { FsTileContentDirective } from './directives/tile-content.directive';
import { FsTilesComponent } from './components/tiles/tiles.component';
import { NgModule, ModuleWithProviders } from '@angular/core';
import { CommonModule } from '@angular/common';

import { FsTileComponent } from './components/tile/tile.component';


@NgModule({
    imports: [
        CommonModule,
        FsTileComponent,
        FsTilesComponent,
        FsTileContentDirective,
        FsTileLabelDirective,
    ],
    exports: [
        FsTileComponent,
        FsTilesComponent,
        FsTileContentDirective,
        FsTileLabelDirective
    ]
})
export class FsTileModule {
  static forRoot(): ModuleWithProviders<FsTileModule> {
    return {
      ngModule: FsTileModule
    };
  }
}
