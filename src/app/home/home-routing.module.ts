import { ChildComponent } from './../child/child.component';
import { ParentComponent } from './../parent/parent.component';
import { PracticeComponent } from './../practice/practice.component';
import { CreateComponent } from './../create/create.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomePage } from './home.page';

const routes: Routes = [
  {
    path: '',
    component: HomePage,
  },
  { path: 'create', component: CreateComponent },
  { path: 'practice', component: PracticeComponent },
  { path: 'parent', component: ParentComponent },
  { path: 'child', component: ChildComponent },

];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
