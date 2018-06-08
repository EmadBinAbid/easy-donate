import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../services/RouteService/route.service';

@Component({
  selector: 'ed-easy-donate-app',
  templateUrl: './easy-donate-app.component.html',
  styleUrls: ['./easy-donate-app.component.scss']
})
export class EasyDonateAppComponent implements OnInit {

  //For RouteService
  isOnHomePage: boolean = true;
  

  constructor(private routeService: RouteService) { }

  ngOnInit() {
    this.routeService.$onHomePage.subscribe((value) => {
      this.isOnHomePage = value;
    });
  }

}
