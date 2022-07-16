import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-cancelled',
  templateUrl: './cancelled.component.html',
  styleUrls: ['./cancelled.component.scss']
})
export class CancelledComponent implements OnInit {

  constructor(private service: MainService) { }
  cancelled:any
  ngOnInit(): void {
    this.service.gettrip().subscribe((res: any) => {
      this.cancelled=res.cancelled
    })
  }

}
