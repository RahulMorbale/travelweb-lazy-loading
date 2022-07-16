import { Component, OnInit } from '@angular/core';
import { MainService } from 'src/app/Service/main.service';

@Component({
  selector: 'app-completed',
  templateUrl: './completed.component.html',
  styleUrls: ['./completed.component.scss']
})
export class CompletedComponent implements OnInit {

  constructor(private service: MainService) { }
  completed:any

  ngOnInit(): void {
    this.service.gettrip().subscribe((res: any) => {
      this.completed=res.completed
    })
  }

}
