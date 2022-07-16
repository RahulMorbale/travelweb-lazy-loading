import { FormControl, FormGroup, Validators } from '@angular/forms';
import { ActivatedRoute, Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Service/main.service';
@Component({
  selector: 'app-flightsearch',
  templateUrl: './flightsearch.component.html',
  styleUrls: ['./flightsearch.component.scss']
})
export class FlightsearchComponent implements OnInit {
  constructor(private route: Router,private activated:ActivatedRoute,private service:MainService) { 
    console.log("Flightbooking Module")
  }
  ngOnInit(): void {
    // this.service.getnavbarvalue()
    this.From = this.flightfrom[0]
    this.To = this.flightto[0]
  }
  From: any
  To: any
  error: any
  errormsg = "From & To airports cannot be the same"
  formobj = new FormGroup({
    From: new FormControl('', [Validators.required]),
    To: new FormControl('', [Validators.required])
  })
  check() {  // check from and to value if same then show error msg 
    if (this.From == this.To) {
      this.error = this.errormsg
    } else {
      this.error = null
    }
  }
  flightfrom: string[] = ['Pune', 'Mumbai', 'Bengaluru', 'Kolkata', 'Chennai', 'Goa'];
  flightto: string[] = ['Mumbai', 'Pune', 'Bengaluru', 'Kolkata', 'Chennai', 'Goa'];
  search() {
    if (this.From == this.To) {
      this.errormsg
    } else {
      this.route.navigateByUrl("/flightbooking/flightdetails", { state: { passdatafrom: this.From, passdatato: this.To } })
    }
    //   if (this.From==this.To) {
    //     this.error=this.errormsg
    //   } else {
    //     this.route.navigateByUrl("/flightdetails",{state:{from:this.From,to:this.To}})
    //   }
  }
}
