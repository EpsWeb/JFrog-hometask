import {AfterViewInit, Component, OnDestroy, OnInit, ViewChild} from '@angular/core';
import {MatTableDataSource} from "@angular/material/table";
import {MatSort} from "@angular/material/sort";
import {take, takeUntil} from "rxjs/operators";
import {Subject} from "rxjs";
import {DataService} from "../data.service";
import {Category, Item} from "../models";
import {HelpService} from "../help.service";

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.scss']
})
export class TableComponent implements OnInit, AfterViewInit, OnDestroy {
  @ViewChild(MatSort) sort: MatSort;

  allColumns: string[];
  displayedColumns: string[];
  dataSource: MatTableDataSource<Item>;
  type: string;
  searchingText: string;
  fullData: Category[];
  isLoaded = false;

  private _unsubscribeAll: Subject<any>;

  constructor(private _dataService: DataService) {

    // Set the private defaults
    this._unsubscribeAll = new Subject();
    this.searchingText = '';
    this.allColumns = ['vendor', 'name', 'price', 'system', 'is_hybrid'];
  }

  ngOnInit(): void {
    this.initFullData();

    // Subscribes on data changing
    this.subscribeOnTypeSelected();
    this.subscribeOnSearching();

    this.updateColumns();
  }

  ngAfterViewInit() {
    this.dataSource.sort = this.sort;
  }

  ngOnDestroy(): void {
    // Unsubscribe from all subscriptions
    this._unsubscribeAll.next();
    this._unsubscribeAll.complete();
  }

  initFullData(): void {
    this._dataService.getFullData()
      .pipe(take(1))
      .subscribe((res: Category[]) => {
        this.fullData = res;
        this.isLoaded = true;
      });
  }

  subscribeOnTypeSelected(): void {
    this._dataService.onTypeSelected
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((type: string) => {
        if (type) {
          this.type = type;
          const items = this.fullData.filter(subject => subject.title === type)[0].items.filter(item => HelpService.filterItemBySearch(item, this.searchingText, this.type));
          this.dataSource = new MatTableDataSource(items);
          this.dataSource.sort = this.sort;
          this.updateColumns();
        }
      });
  }

  subscribeOnSearching(): void {
    this._dataService.onSearch
      .pipe(takeUntil(this._unsubscribeAll))
      .subscribe((text: string) => {
        this.searchingText = text;
        const items = this.fullData.filter(subject => subject.title === this.type)[0].items.filter(item => HelpService.filterItemBySearch(item, this.searchingText, this.type));
        this.dataSource = new MatTableDataSource(items);
        this.dataSource.sort = this.sort;
        this.updateColumns();
      });
  }

  updateColumns(): void {
    switch (this.type) {
      case 'Phones':
        this.displayedColumns = this.allColumns.filter(column => column !== 'system' && column !== 'is_hybrid');
        break;
      case 'Laptops':
        this.displayedColumns = this.allColumns.filter(column => column !== 'is_hybrid');
        break;
      case 'Cars':
        this.displayedColumns = this.allColumns.filter(column => column !== 'system');
        break;
    }
  }

}
