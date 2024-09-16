import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { AuthenticationServer } from 'src/app/engine/services/authentication/authentication-server.service';

@Component({
  selector: 'app-configuration-client',
  templateUrl: './configuration-client.component.html',
  styleUrls: ['./configuration-client.component.scss']
})
export class ConfigurationClientComponent implements OnInit {

  obj: any =
  {
  "token":{"authentication": "token"}
  };

  constructor(private teste:AuthenticationServer, private route:ActivatedRoute) { }

  ngOnInit(): void {
    // this.route.snapshot.paramMap.get("index");
    // this.route.paramMap
    //   .subscribe((params: ParamMap) => {
    //     if (params.has('title'))
    //       this.title = params.get('title');
    //   })
  }

  printToken(){
    let teste = this.teste.getToken();
    let teste2 = this.teste.getUserAuthenticated();
    JSON.stringify(teste2);
    let arrayTest2:any = [];
    arrayTest2 = teste2;
    // let str:string = JSON.parse(teste)
    // this.obj = {
    //   "token":{"authentication": teste}
    // }
    console.log(teste)
    console.log("2"+arrayTest2.sub)
    // console.log(str)
    // console.log(this.obj)
    // console.warn(this.obj)
  }
}
