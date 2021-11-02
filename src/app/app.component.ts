import {Component, OnInit} from '@angular/core';
import {DataService} from "./data.service";

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  types: string[];          // types of devices
  currentType: string;

  constructor(private _dataService: DataService) {}

  ngOnInit(): void {

    // Set the private defaults
    this.types = this._dataService.types;
    this.currentType = this.types[0];

    // Init calling and defining type and search text value
    this._dataService.onTypeSelected.next(this.currentType);
    this._dataService.onSearch.next('');
  }

  onSearchInput(event: Event): void {
    this._dataService.search((event.target as any).value)
  }

  typeSelected(type: string) {
    this._dataService.selectType(type);
  }
}
