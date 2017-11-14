import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MetaSenderComponent} from './meta-sender/meta-sender.component';
import {IssuerComponent} from './issuer/issuer.component';
import {ChallengerComponent} from './challenger/challenger.component';

import { MaterialModule } from '../material.module';

import {UtilModule} from '../util/util.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UtilModule,
    MaterialModule
  ],
  declarations: [
      MetaSenderComponent,
      IssuerComponent,
      ChallengerComponent
  ],
  exports: [
      MetaSenderComponent,
      IssuerComponent,
      ChallengerComponent
  ]
})
export class MetaModule {
}
