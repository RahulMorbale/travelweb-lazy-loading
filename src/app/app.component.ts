import { MainService } from './Service/main.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  title = 'travel';
  showme: boolean = false
  // isready = true;
  constructor(private service: MainService) { }
  ngOnInit(): void {
    // this.showme=this.service.getnavbarvalue()

  }
}

