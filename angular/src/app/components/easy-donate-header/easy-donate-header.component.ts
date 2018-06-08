import { Component, OnInit } from '@angular/core';
import { RouteService } from '../../services/RouteService/route.service';

@Component({
  selector: 'ed-easy-donate-header',
  templateUrl: './easy-donate-header.component.html',
  styleUrls: ['./easy-donate-header.component.scss']
})
export class EasyDonateHeaderComponent implements OnInit {

  title: string = "EasyDonate";
  loginStatus: boolean = false;
  isMenu: boolean = false;

  constructor(private routeService : RouteService) { }

  ngOnInit() {
  }

  menuStatus()
  {
    if(this.isMenu === false)
    {
      this.isMenu = true;
    }
    else
    {
      this.isMenu = false;
    }
  }

  //For RouteService
  setOnHomePage(setValue: boolean)
  {
    this.routeService.$onHomePageSubject.next(setValue);
    
  }

}
