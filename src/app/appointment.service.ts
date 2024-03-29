import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class AppointmentService {

  private apiurl = 'http://localhost:8080/appointment';

  constructor(private http: HttpClient) { }

  makeAppointment(data){
    return this.http.post(this.apiurl, data);
  }
}
