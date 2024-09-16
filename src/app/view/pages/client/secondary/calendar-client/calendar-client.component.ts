import { Component, Inject, Injectable, OnInit } from '@angular/core';
import { AuthenticationServer } from 'src/app/engine/services/authentication/authentication-server.service';

@Component({
  selector: 'app-calendar-client',
  templateUrl: './calendar-client.component.html',
  styleUrls: ['./calendar-client.component.scss'],
  providers:[AuthenticationServer],
})

@Injectable()
export class CalendarClientComponent implements OnInit {

  constructor() {
   }

  ngOnInit(): void {
  }
}


