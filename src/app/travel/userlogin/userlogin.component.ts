import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-userlogin',
  templateUrl: './userlogin.component.html',
  styleUrls: ['./userlogin.component.scss']
})
export class UserloginComponent implements OnInit {

  constructor(private route:Router ,private service:MainService) {
    console.log("Travel Module")
   }
  data: any
  // shownav:boolean=false

  ngOnInit(): void {
    this.service.getdata().subscribe((value: any) => {
      this.data = value.userdetails
      console.log("json data", this.data)
    })
  }
  formobj = new FormGroup({
    username: new FormControl('', [Validators.required]),
    password: new FormControl('', [Validators.required, Validators.pattern("[0-9]{6,10}")])
  })
  // hide = true;
  next() {
    this.data.map((item: any) => {
      if (item.username == this.formobj.value.username &&
        item.password == this.formobj.value.password) {
          // this.service.setnavbarvalue()
        // this.route.navigateByUrl('/user',{state:item.user})
        // this.route.navigate(['routetodetailscomponent'], { state: {data: order} });
        this.route.navigateByUrl('/flightbooking/flightsearch', { state: { data: item.user} })
        console.log("hello")
      } 
    })
  }
  }

