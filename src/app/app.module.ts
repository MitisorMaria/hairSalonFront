import { BrowserModule } from '@angular/platform-browser';
import {BrowserAnimationsModule} from '@angular/platform-browser/animations';
import { NgModule } from '@angular/core';

import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { HomeComponent } from './home/home.component';
import { GalleryComponent } from './gallery/gallery.component';
import { ReviewsComponent } from './reviews/reviews.component';
import { AppointmentComponent } from './appointment/appointment.component';
import { ContactComponent } from './contact/contact.component';
import { AppRoutingModule } from './app-routing.module';
import { TeamComponent } from './team/team.component';
import { NgxMatDatetimePickerModule, NgxMatTimepickerModule } from '@angular-material-components/datetime-picker';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatDatepickerModule } from '@angular/material/datepicker';
import { MatInputModule } from '@angular/material/input';



import { NgxMaterialTimepickerModule } from 'ngx-material-timepicker';
import { AppointmentService } from './appointment.service';
import { HttpClientModule } from '@angular/common/http';
import { EmailService } from './email.service';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { AgmCoreModule } from '@agm/core';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    HomeComponent,
    GalleryComponent,
    ReviewsComponent,
    AppointmentComponent,
    ContactComponent,
    TeamComponent
  ],
  imports: [
    BrowserAnimationsModule,
    AppRoutingModule,
    BrowserModule,
    MatInputModule,    
    MatDatepickerModule,
    NgxMatTimepickerModule,
    FormsModule,
    HttpClientModule,
    ReactiveFormsModule,
    NgxMatDatetimePickerModule,
    NgxMaterialTimepickerModule,
    NgbModule,
    AgmCoreModule.forRoot({
      apiKey: '#########################'
    })
  ],
  providers: [AppointmentService,
              EmailService],
  bootstrap: [AppComponent]
})
export class AppModule { }
