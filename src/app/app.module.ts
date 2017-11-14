import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Material UI
import {
  MatButtonModule,
  MatCheckboxModule,
    MatFormFieldModule,
    MatInputModule
} from '@angular/material';

import {
  MatTabsModule
} from '@angular/material/tabs';

import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

// App
import { AppComponent } from './app.component';
import { MetaModule } from './meta/meta.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    FormsModule,
    HttpModule,
    // Material UI
    MatFormFieldModule,
    MatInputModule,
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule,
    // Meta
    MetaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
