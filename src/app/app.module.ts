import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { HttpModule } from '@angular/http';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { NguiMapModule} from '@ngui/map';
import { HttpClientModule } from '@angular/common/http';




// App
import { AppComponent } from './app.component';
import { MetaModule } from './meta/meta.module';

@NgModule({
  declarations: [
    AppComponent
  ],
  imports: [
    FormsModule,
    HttpModule,
    MaterialModule,
    MetaModule,
      BrowserModule,
    BrowserAnimationsModule,
      NguiMapModule.forRoot({apiUrl: 'https://maps.google.com/maps/api/js?key=AIzaSyB_AqfNVguabv7oNGyXM42_qk4E9NxR60g'}),
      HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
