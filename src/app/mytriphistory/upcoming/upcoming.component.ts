import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-upcoming',
  templateUrl: './upcoming.component.html',
  styleUrls: ['./upcoming.component.scss']
})
export class UpcomingComponent implements OnInit {

  constructor(private service: MainService) { }
  upcoming: any
  ngOnInit(): void {
    this.service.gettrip().subscribe((res: any) => {
      this.upcoming = res.upcoming
    })
  }

}
