import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.css']
})
export class FooterComponent implements OnInit {

  lat = 51.678418;
  lng = 7.809007;
  constructor() { }

  ngOnInit() {
  }

}
