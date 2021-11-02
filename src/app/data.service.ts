import {Injectable} from '@angular/core';
import {BehaviorSubject, Observable, of} from "rxjs";
import {data} from "./data";
import {Category} from "./models";

@Injectable({
  providedIn: 'root'
})
export class DataService {

  types: string[];          // types of devices
  searchingText: string;

  onTypeSelected: BehaviorSubject<string>;
  onSearch: BehaviorSubject<string>;

  constructor() {

    // Set the private defaults
    this.types = ['Phones', 'Cars', 'Laptops'];
    this.onTypeSelected = new BehaviorSubject(null);
    this.onSearch = new BehaviorSubject('');
    this.searchingText = '';
  }

  selectType(type: string): void {
    this.onTypeSelected.next(type);
  }

  search(text: string): void {
    this.onSearch.next(text);
  }

  getFullData(): Observable<Category[]> {   // get data of all objects in shop
    return of(data)
  }

}
