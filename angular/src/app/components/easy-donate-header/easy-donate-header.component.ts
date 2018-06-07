import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-easy-donate-header',
  templateUrl: './easy-donate-header.component.html',
  styleUrls: ['./easy-donate-header.component.scss']
})
export class EasyDonateHeaderComponent implements OnInit {

  title: string = "EasyDonate";
  loginStatus: boolean = false;

  constructor() { }

  ngOnInit() {
  }

}
