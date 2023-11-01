import { NgModule } from '@angular/core';
import { HomeModule } from './home/home.module';
import { ProjectComponent } from './project/project.component';
import { ProjectModule } from './project/project.module';



@NgModule({
  declarations: [],
  imports: [
    HomeModule,
    ProjectModule
  ]
})
export class PagesModule { }
