import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.scss']
})
export class FilterComponent {
  constructor() { }
  _filter: any = { launch_success: '', land_success: '', launch_year: '2019' }
  @Output() filterAppliedEvent = new EventEmitter<any>();
  filters: any = [
    {
      header: 'Launch Year',
      values: ['2006', '2007', '2008', '2009', '2010', '2011', '2012', '2013', '2014', '2015', '2016', '2017', '2018', '2019', '2020'],
      active: '2019', 
      key:'launch_year'
    },
    {
      header: 'Successful Launch',
      values: ['true', 'false'],
      key:'launch_success'
    },
    {
      header: 'Successful Landing',
      values: ['true', 'false'],
      key:'land_success'
    }
  ]

  ngOnInit() {}


  setFilter(value: any, key: any, index:any) {
    /*** toggle case - remove applied filter */
    if(this._filter[key] === value){
       this._filter[key] = '';
       this.filters[index].active = '';
    }else{
      this._filter[key] = value;
      this.filters[index].active = value;
    }
   this.filterAppliedEvent.emit(this._filter)
  }
}
