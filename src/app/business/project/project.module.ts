import { SharedModule } from './../../shared/shared.module';
import { NgModule } from '@angular/core';
import { ProjectRoutingModule } from './project-routing.module';
import { AComponent } from './a/a.component';

@NgModule({
  imports: [
    SharedModule,
    ProjectRoutingModule
  ],
  exports: [
    AComponent
  ],
  declarations: [AComponent]
})
export class ProjectModule { }
