import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { RouterModule, Routes } from '@angular/router';

import { FsExampleModule } from '@firestitch/example';
import { FsMessageModule } from '@firestitch/message';
import { FsTileModule } from '@firestitch/package';

import { AppComponent } from './app.component';
import {
  ExamplesComponent,
  KitchenSinkComponent
} from './components';
import { KitchenSinkConfigureComponent } from './components/kitchen-sink-configure';
import { AppMaterialModule } from './material.module';

const routes: Routes = [
  { path: '', component: ExamplesComponent },
];

@NgModule({
    bootstrap: [AppComponent],
    imports: [
        BrowserModule,
        FsTileModule,
        BrowserAnimationsModule,
        AppMaterialModule,
        FormsModule,
        FsExampleModule.forRoot(),
        FsMessageModule.forRoot(),
        RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    ],
    declarations: [
        AppComponent,
        ExamplesComponent,
        KitchenSinkComponent,
        KitchenSinkConfigureComponent
    ]
})
export class PlaygroundModule {
}
