import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavbarComponent } from './navbar/navbar.component';

import { IonicModule } from '@ionic/angular';
import { FormsModule } from '@angular/forms';
import { LoginPageModule } from './login/login.module';
import { ModalPageModule } from './modal/modal.module';
import { RegisterPageModule } from './register/register.module';
@NgModule({
  imports: [
    CommonModule,
    IonicModule,
    FormsModule,
    LoginPageModule,
    ModalPageModule,
    RegisterPageModule,
  ],
  declarations: [NavbarComponent],
  exports: [NavbarComponent],
})
export class ComponentsModule {}
