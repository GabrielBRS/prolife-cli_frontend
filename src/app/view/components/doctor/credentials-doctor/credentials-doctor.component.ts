import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-credentials-doctor',
  templateUrl: './credentials-doctor.component.html',
  styleUrls: ['./credentials-doctor.component.scss']
})
export class CredentialsDoctorComponent implements OnInit {

  @Input() status:any;
  @Input() fullName:any;
  @Input() cpf:any;


  constructor() { }

  ngOnInit(): void {
  }

}
