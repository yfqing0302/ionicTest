import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ClassfiyPageRoutingModule } from './classfiy-routing.module';

import { ClassfiyPage } from './classfiy.page';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ClassfiyPageRoutingModule
  ],
  declarations: [ClassfiyPage]
})
export class ClassfiyPageModule {}
