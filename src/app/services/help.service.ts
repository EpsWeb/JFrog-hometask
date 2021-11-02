import {Injectable} from '@angular/core';
import {Item} from "../models";

@Injectable({
  providedIn: 'root'
})
export class HelpService {

  constructor() {
  }

  static filterItemBySearch(item: Item, search: string): boolean {
    const text = search.toLowerCase();
    return (item.vendor && item.vendor.toLowerCase().includes(text)) || (item.name && item.name.toLowerCase().includes(text));
  }
}
