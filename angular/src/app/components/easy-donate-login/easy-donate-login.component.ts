import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'ed-easy-donate-login',
  templateUrl: './easy-donate-login.component.html',
  styleUrls: ['./easy-donate-login.component.scss']
})
export class EasyDonateLoginComponent implements OnInit {

  username: string;
  password: string;

  constructor() { }

  ngOnInit() {
  }

  loginUser()
  {
    
  }

}
