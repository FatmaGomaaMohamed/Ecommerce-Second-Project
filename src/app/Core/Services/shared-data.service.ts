import { Injectable } from '@angular/core';
import { MakeUpCard } from '../Model';

@Injectable({
  providedIn: 'root'
})
export class SharedDataService {

  private Item: MakeUpCard[]=[];

  constructor() { }

  
  setItem(Item: any): void {
    this.Item = Item;
  }

  getItem(): any {
    return this.Item;
  }
}
