import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { RegisterPage } from './register.page';

@NgModule({
  imports: [CommonModule, FormsModule, IonicModule],
  declarations: [RegisterPage],
  exports: [RegisterPage],
})
export class RegisterPageModule {}
