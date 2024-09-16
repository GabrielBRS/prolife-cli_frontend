import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-credentials-client',
  templateUrl: './credentials-client.component.html',
  styleUrls: ['./credentials-client.component.scss']
})
export class CredentialsClientComponent implements OnInit {

  @Input() status:any;
  @Input() fullName:any;
  @Input() cpf:any;

  constructor() { }

  ngOnInit(): void {
  }

}
