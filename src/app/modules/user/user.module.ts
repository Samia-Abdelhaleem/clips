import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

// to register my form to reactive module  &  use its directives & properties
import { ReactiveFormsModule } from '@angular/forms';
import { SharedModule } from 'src/app/shared/shared.module';
import { AuthModalComponent } from './auth-modal/auth-modal.component';
import { LoginComponent } from './login/login.component';
import { RegisterComponent } from './register/register.component';
import { NgxMaskDirective, NgxMaskPipe, provideNgxMask } from 'ngx-mask';

@NgModule({
  declarations: [AuthModalComponent, LoginComponent, RegisterComponent],
  imports: [
    CommonModule,
    SharedModule,
    ReactiveFormsModule,
    NgxMaskDirective,
    NgxMaskPipe,
  ],
  exports: [AuthModalComponent],
  providers: [provideNgxMask()],
})
export class UserModule {}
