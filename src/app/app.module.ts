import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';

// Material UI
import {
  MatButtonModule, 
  MatCheckboxModule
} from '@angular/material';

import {
  MatTabsModule
} from '@angular/material/tabs';

// App
import { AppComponent } from './app.component';
import {MetaModule} from './meta/meta.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    HttpModule,
    MetaModule,
    // Material UI
    MatButtonModule,
    MatCheckboxModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
