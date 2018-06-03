import { NgModule } from '@angular/core';
import { BComponent } from './b/b.component';
import { SharedModule } from './../../shared/shared.module';
import { GspRoutingModule } from './gsp-routing.module';
@NgModule({
  imports: [
    SharedModule,
    GspRoutingModule
  ],
  exports: [
    BComponent
  ],
  declarations: [BComponent]
})
export class GspModule { }
