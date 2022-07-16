import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-flightdetails',
  templateUrl: './flightdetails.component.html',
  styleUrls: ['./flightdetails.component.scss']
})
export class FlightdetailsComponent implements OnInit {
  constructor(private service: MainService) { }
  panelOpenState = false;
  // newarr = [];
  // newarr = new Array<any>();
  // details: any
  details = new Array<any>()
  // tempnewarr = new Array<any>()
  flights: any
  xyz: any
  receivefrom: any  // drpdown value from
  receiveto: any  // dropdown value to
  ngOnInit(): void {
    // this.service.getnavbarvalue()
    this.receivefrom = history.state.passdatafrom
    this.receiveto = history.state.passdatato
    this.service.getflightdetails().subscribe((res: any) => {
      this.details = res.company
      let xyz = this.details.filter((a: any) => { return a.from == this.receivefrom && a.to == this.receiveto })
      this.flights = xyz


      // this.details.forEach(
      //   x => this.newarr.push(x.flightdetails)
      // )
      // for (let i = 0; i < this.details.length; ++i) {
      //   this.tempnewarr[i] = this.newarr[i]
      // }
      // this.newarr.forEach(y => this.tempnewarr.push(y))
      // this.tempnewarr.filter(a => a.from == "Mumbai" && a.to == "Pune")
      // this.newarr=new Array<any>();
      // this.newarr = JSON.parse(JSON.stringify(this.details));
      // this.newarr.filter(a=>a.from=="Mumbai" && a.to=="Pune")
      // this.newarr.filter(a=>a.from==this.receivefrom && a.to==this.receiveto)
      // console.log(this.newarr)
    })
  }

}
