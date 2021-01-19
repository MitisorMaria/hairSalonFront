import { Component, OnInit } from '@angular/core';
import { AppointmentService } from '../appointment.service';



@Component({
  selector: 'app-appointment',
  templateUrl: './appointment.component.html',
  styleUrls: ['./appointment.component.css']
})
export class AppointmentComponent implements OnInit {

  constructor(private appointmentService: AppointmentService) { }

  ngOnInit() {
  }

  public appointmentMade;

  makeAppointment(data) {
    this.appointmentService.makeAppointment(data).subscribe(
      val => {
        this.appointmentMade = true;
      },
      response => {
        this.appointmentMade = false;
      },
      () => {
      }
 )
  }


  closeAlert() {
    this.appointmentMade = undefined;
  }

}
