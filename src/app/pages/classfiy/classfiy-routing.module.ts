import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { ClassfiyPage } from './classfiy.page';

const routes: Routes = [
  {
    path: '',
    component: ClassfiyPage
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ClassfiyPageRoutingModule {}
