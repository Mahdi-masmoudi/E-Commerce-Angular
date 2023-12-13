import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CatarticleRoutingModule } from './catarticle-routing.module';
import { HttpClientModule } from '@angular/common/http';
import { IndexComponent } from './index/index.component';


@NgModule({
  declarations: [
    IndexComponent
  ],
  imports: [
    CommonModule,
    CatarticleRoutingModule,
    HttpClientModule
  ]
})
export class CatarticleModule { }
