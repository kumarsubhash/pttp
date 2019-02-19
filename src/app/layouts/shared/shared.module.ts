import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LoginComponent } from './login/login.component';
import { RouterModule } from '@angular/router';
import { SharedRoutes } from './shared.routing';
import { FormsModule } from '@angular/forms';
import { MatButtonModule, MatRippleModule, MatFormFieldModule, MatInputModule, MatSelectModule, MatTooltipModule } from '@angular/material';
import { ForgotComponent } from './forgot/forgot.component';
import { RegisterComponent } from './register/register.component';

@NgModule({
  imports: [
    CommonModule,
    RouterModule.forChild(SharedRoutes),
    FormsModule,
    MatButtonModule,
    MatRippleModule,
    MatFormFieldModule,
    MatInputModule,
    MatSelectModule,
    MatTooltipModule
  ],
  declarations: [
    LoginComponent,
    ForgotComponent,
    RegisterComponent,
  ],
  exports: [RouterModule]
})
export class SharedModule { }
