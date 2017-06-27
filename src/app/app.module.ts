import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule } from '@angular/forms';
import { MdButtonModule, MdInputModule, MdCardModule } from '@angular/material';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { AppComponent } from './app.component';
import { TabEntryComponent } from './tab-entry/tab-entry.component';
import { TabViewComponent } from './tab-view/tab-view.component';
import { TabService } from './tab-service/tab-service.service';
import { HelpPageComponent } from './help-page/help-page.component';

@NgModule({
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    MdButtonModule,
    MdInputModule,
    MdCardModule,
    BrowserAnimationsModule
  ],
  declarations: [
    AppComponent,
    TabEntryComponent,
    TabViewComponent,
    HelpPageComponent
  ],
  providers: [
    TabService
  ],
  bootstrap: [
    AppComponent
  ]
})
export class AppModule {}