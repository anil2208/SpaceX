import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class HTTPService {
//  https://api.spaceXdata.com/v3/launches?limit=100&launch_success=true&land_success=true&launch_year=2014
  private api = 'https://api.spaceXdata.com/v3/launches?limit=100';
  constructor(
    private http: HttpClient
    ) { }
    getSpaceXData(filter:any){
         return this.http.get(`${this.api}&launch_success=${filter.launch_success || ''}&land_success=${filter.land_success || ''}&launch_year=${filter.launch_year || ''}`)
    }
}