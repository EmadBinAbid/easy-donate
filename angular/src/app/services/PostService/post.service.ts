import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PostService {

  postMessagesObject: Object =  
  {
    post:
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
    ]
  };

  constructor() { }

  getPostsObject()
  {
    return this.postMessagesObject;
  }
}
