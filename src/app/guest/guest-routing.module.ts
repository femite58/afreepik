import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { PictureDetailsPageComponent } from './pages/picture-details-page/picture-details-page.component';
import { PicturesComponent } from './pages/pictures/pictures.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'search/:keyword', component: PicturesComponent },
  { path: 'category/:category', component: PicturesComponent },
  { path: 'picture/:pid/:name', component: PictureDetailsPageComponent },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class GuestRoutingModule { }
