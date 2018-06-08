import { Component, OnInit } from '@angular/core';
import { PostService } from '../../services/PostService/post.service';
import { GetUserPosts } from '../../interfaces/get-user-posts';

@Component({
  selector: 'ed-easy-donate-all-posts',
  templateUrl: './easy-donate-all-posts.component.html',
  styleUrls: ['./easy-donate-all-posts.component.scss']
})
export class EasyDonateAllPostsComponent implements OnInit {

  postMessagesObject: Object;

  constructor(private postService: PostService) { }

  ngOnInit() {
    this.postMessagesObject = this.postService.getPostsObject();
  }

}
