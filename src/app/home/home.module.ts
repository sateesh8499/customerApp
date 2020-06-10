import { ChildComponent } from './../child/child.component';
import { ParentComponent } from './../parent/parent.component';
import { PracticeComponent } from './../practice/practice.component';
import { CreateComponent } from './../create/create.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { IonicModule } from '@ionic/angular';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HomePage } from './home.page';

import { HomePageRoutingModule } from './home-routing.module';


@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    HomePageRoutingModule,
    ReactiveFormsModule
  ],
  declarations: [HomePage, CreateComponent, PracticeComponent, ParentComponent, ChildComponent]
})
export class HomePageModule {}
