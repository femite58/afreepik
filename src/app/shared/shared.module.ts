import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { HeaderComponent } from './components/header/header.component';
import { FooterComponent } from './components/footer/footer.component';
import { RouterModule } from '@angular/router';
import { DropdownComponent } from './components/dropdown/dropdown.component';
import { DynamicGridComponent } from './components/dynamic-grid/dynamic-grid.component';
import { HomeFlexSliderComponent } from './components/home-flex-slider/home-flex-slider.component';
import { BannerCarouselComponent } from './components/banner-carousel/banner-carousel.component';
import { CusAccordionComponent } from './components/cus-accordion/cus-accordion.component';
import { LoginComponent } from './components/login/login.component';
import { RegisterComponent } from './components/register/register.component';
import { TimeAgoPipe } from './pipe/time-ago.pipe';
import { GuestHomeComponent } from './pages/guest-home/guest-home.component';
import { AuthHomeComponent } from './pages/auth-home/auth-home.component';
import { PictureDetailsComponent } from './components/picture-details/picture-details.component';
import { EachPicComponent } from './components/each-pic/each-pic.component';



@NgModule({
  declarations: [
    GuestHomeComponent,
    HeaderComponent,
    FooterComponent,
    DropdownComponent,
    DynamicGridComponent,
    HomeFlexSliderComponent,
    BannerCarouselComponent,
    CusAccordionComponent,
    LoginComponent,
    RegisterComponent,
    TimeAgoPipe,
    AuthHomeComponent,
    PictureDetailsComponent,
    EachPicComponent,
  ],
  imports: [
    CommonModule,
    RouterModule,
    FormsModule,
    ReactiveFormsModule
  ],
  exports: [
    HeaderComponent,
    FooterComponent,
    DropdownComponent,
    DynamicGridComponent,
    HomeFlexSliderComponent,
    BannerCarouselComponent,
    CusAccordionComponent,
    TimeAgoPipe,
    AuthHomeComponent,
    GuestHomeComponent,
    PictureDetailsComponent,
    EachPicComponent,
  ]
})
export class SharedModule { }
