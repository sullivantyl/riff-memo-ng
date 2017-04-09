import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';

import { AppComponent } from './app.component';
import { TabEntryComponent } from './tab-entry/tab-entry.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { TabService } from './tab-service/tab-service.service';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule
  ],
  declarations: [
    AppComponent,
    TabEntryComponent,
    TabViewComponent
  ],
  providers: [
    TabService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}