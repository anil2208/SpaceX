import { Component } from '@angular/core';
import { HTTPService } from '../shared/service/http.service';

@Component({
  selector: 'app-spacex',
  templateUrl: './spacex.component.html',
  styleUrls: ['./spacex.component.scss']
})
export class SpaceXComponent {
  constructor(
    public _HTTPService: HTTPService
  ) { }
  items: any = []

  ngOnInit() {
    this.getFilteredResponse({ launch_success: '', land_success: '', launch_year: '2019' });
  }

  getFilteredResponse(filter:any){
    this._HTTPService.getSpaceXData(filter).subscribe((res: any) => {
      this.items = res;
    })
  }
  
  filterApplied($event:any){
     this.getFilteredResponse($event)
  }
}
