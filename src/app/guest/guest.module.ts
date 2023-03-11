import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { GuestRoutingModule } from './guest-routing.module';
import { SharedModule } from '../shared/shared.module';
import { PicturesComponent } from './pages/pictures/pictures.component';
import { LoginPageComponent } from './pages/login-page/login-page.component';
import { RegisterPageComponent } from './pages/register-page/register-page.component';
import { HomeComponent } from './pages/home/home.component';
import { PictureDetailsPageComponent } from './pages/picture-details-page/picture-details-page.component';


@NgModule({
  declarations: [
    HomeComponent,
    PicturesComponent,
    LoginPageComponent,
    RegisterPageComponent,
    PictureDetailsPageComponent,
  ],
  imports: [
    CommonModule,
    GuestRoutingModule,
    SharedModule
  ]
})
export class GuestModule { }
