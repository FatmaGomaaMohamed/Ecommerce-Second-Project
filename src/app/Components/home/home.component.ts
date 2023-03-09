import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MakeUpCard } from 'src/app/Core/Model';
import { SharedDataService } from 'src/app/Core/Services/shared-data.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  prod:any;
  constructor(private SharedService:SharedDataService) {
      this.prod=this.SharedService.getItem();
     console.log(this.prod);
  }
  IncreaseCounter(i:any){
    if(this.prod[i].Counter!=5)
    this.prod[i].Counter++;
    console.log(this.prod[i].Counter);
  }
  
  inc(prod:any){
    if(prod.Counter != 5){
      prod.Counter += 1;
    }
  }
  dec(prod:any){
      if(prod.Counter != 0){
        prod.Counter -= 1;
      }
  }
}
