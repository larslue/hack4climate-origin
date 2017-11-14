import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';
import {MetaSenderComponent} from './meta-sender/meta-sender.component';
import {IssuerComponent} from './issuer/issuer.component';
import {UtilModule} from '../util/util.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UtilModule
  ],
  declarations: [MetaSenderComponent, IssuerComponent],
  exports: [MetaSenderComponent]
})
export class MetaModule {
}
