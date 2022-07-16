import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class MainService {
  // shownav:boolean=false
  constructor(private http: HttpClient) { }
  getdata() {
    let url = 'assets/Data/UserDetails.json'  // login username and password json data
    return this.http.get(url)
  }
  getflightdetails() {
    let url = 'assets/Data/flightdetails.json'  // flightdetails json data
    return this.http.get(url)
  }

  gettrip() {
    let url='assets/Data/flighthistory.json'
    return this.http.get(url)
  }

  // setnavbarvalue(){
  //   this.shownav=true
  // }
  // getnavbarvalue(){
  //   return this.shownav;
  // }


}
