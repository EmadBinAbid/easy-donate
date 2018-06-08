import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'ed-easy-donate-all-posts',
  templateUrl: './easy-donate-all-posts.component.html',
  styleUrls: ['./easy-donate-all-posts.component.scss']
})
export class EasyDonateAllPostsComponent implements OnInit {

  

  postMessagesList: Array<any> =  
  [
    {
      message: "I want to donate a set of clothes. Is there anyone knows any needy person?",
      type: "cloth"
    },
    {
      message: "Blood group B+ needed at Agha Khan Hospital, Karachi. For details, kindly contact.",
      type: "blood"
    },
    {
      message: "Hello, food packets required for iftaar dastarkhuan in Jauhar. Kindly participate.",
      type: "food"
    }
  ];

  constructor() { }

  ngOnInit() {
  }

}
