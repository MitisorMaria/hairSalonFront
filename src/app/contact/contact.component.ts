import { Component, OnInit } from '@angular/core';
import { EmailService } from '../email.service';

@Component({
  selector: 'app-contact',
  templateUrl: './contact.component.html',
  styleUrls: ['./contact.component.css']
})
export class ContactComponent implements OnInit {

  constructor(private emailService : EmailService) { }

  public emailSuccessfullySent;

  ngOnInit() {
  }

  sendButtonClicked(data) {
    this.emailService.sendEmail(data).subscribe(
      val => {
        this.emailSuccessfullySent = true;
      },
      response => {
        this.emailSuccessfullySent = false;
      },
      () => {
      }
 )
    }

    closeAlert() {
     this.emailSuccessfullySent = undefined;
    }


}
