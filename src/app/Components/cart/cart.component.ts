import { Component } from '@angular/core';
import { Router } from '@angular/router';
import { MakeUpCard } from 'src/app/Core/Model';
import { SharedDataService } from 'src/app/Core/Services/shared-data.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent {
  makeup:MakeUpCard[]=new Array();
  FilteredMakeup=new Array();
  constructor(private router:Router,private SharedService:SharedDataService) {
    this.makeup=[
      {Name:'Lipglass',Image:"../../../assets/images/lipglass1.jpg", Price:"20$" ,Counter:3 },
      {Name:'Eyeshadow',Image:"../../../assets/images/eyeshadow.jpg", Price:"100$",Counter:2 },
      {Name:'Maskara',Image:"../../../assets/images/maskara.jpg", Price:"100$",Counter:8 },
      {Name:'Lipstick',Image:"../../../assets/images/Rog.jpg", Price:"100$",Counter:1 },
      {Name:'Eyeliner',Image:"../../../assets/images/eyeliner.jpg", Price:"100$",Counter:2 },
      {Name:'Blusher',Image:"../../../assets/images/Blusher.jpg", Price:"100$",Counter:1 },
    ]
    this.FilteredMakeup=this.makeup;
  }

  applyFilter(event: Event) {
    const filterValue = (event.target as HTMLInputElement).value;
    this.FilteredMakeup= this.makeup.filter((meal:any) => meal.Name.toLowerCase().includes(filterValue.toLowerCase())) ;
   }
   
   ShowDetails(makeup:MakeUpCard[])
     {
      makeup=this.makeup;
      this.SharedService.setItem(makeup);
     }

}
