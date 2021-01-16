import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home/home.component';
import { ContactComponent } from './contact/contact.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { GalleryComponent } from './gallery/gallery.component';
import { TeamComponent } from './team/team.component';

const routes: Routes = [
  { path:  "", pathMatch:  "full", redirectTo:  "home"},
  { path: "home", component: HomeComponent },
  { path: "team", component: TeamComponent},
  { path: "reviews", component: ReviewsComponent },
  { path: "appointment", component: AppointmentComponent },
  { path: "contact", component: ContactComponent },
  { path: "gallery", component: GalleryComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }


