import { Injectable } from '@angular/core';
import {Item} from "./models";

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor() { }

  static filterItemBySearch(item: Item, search :string, type: string): boolean {
    const text = search.toLowerCase();
    return (item.vendor && item.vendor.toLowerCase().includes(text))
      || (item.name && item.name.toLowerCase().includes(text))
      || (item.price && item.price.toString().includes(text))
      || (type === 'Cars' && item.is_hybrid !== undefined && (item.is_hybrid ? 'yes' : 'no').includes(text))
      || (type === 'Laptops' && item.system && item.system.toLowerCase().includes(text));
  }
}
