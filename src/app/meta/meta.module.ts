import {NgModule} from '@angular/core';
import {CommonModule} from '@angular/common';

import {MatButtonModule} from '@angular/material/button';

import {MetaSenderComponent} from './meta-sender/meta-sender.component';
import {IssuerComponent} from './issuer/issuer.component';
import {ChallengerComponent} from './challenger/challenger.component';

import { MaterialModule } from '../material.module';

import { FormsModule } from '@angular/forms';

import {UtilModule} from '../util/util.module';
import {RouterModule} from '@angular/router';

@NgModule({
  imports: [
    CommonModule,
    RouterModule,
    UtilModule,
    MaterialModule,
      FormsModule,
      MatButtonModule
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
