import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-product-publicity',
  templateUrl: './product-publicity.component.html',
  styleUrls: ['./product-publicity.component.scss']
})
export class ProductPublicityComponent implements OnInit {

  showContent:number = 1;

  constructor() { }

  ngOnInit(): void {
    // this.showImageChange();
  }

  change(number:number){
    this.showContent = number;
  }

  showImageChange(){
    setTimeout(() => {
      ++this.showContent;
      this.infinityLoop(this.showContent);
    }, 2500);
  }

  infinityLoop(number:any){
    if(number < 1 || number > 3 ){
      this.showContent = 1;
    }
  }

}
