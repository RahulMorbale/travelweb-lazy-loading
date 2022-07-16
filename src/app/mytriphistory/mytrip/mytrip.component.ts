import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-mytrip',
  templateUrl: './mytrip.component.html',
  styleUrls: ['./mytrip.component.scss']
})
export class MytripComponent implements OnInit {

  constructor(private service: MainService) { 
    console.log("Mytrip Module")
  }
  upcoming: any
  cancelled:any
  completed:any
  ngOnInit(): void {
    this.service.gettrip().subscribe((res: any) => {
      this.upcoming=res.upcoming
      this.cancelled=res.cancelled
      this.completed=res.completed
    })
  }

}
