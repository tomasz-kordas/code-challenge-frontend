import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Router} from "@angular/router";
import {Post} from "../_model/Post";
import {DataService} from "../_services/data.service";

@Component({
  selector: 'app-details',
  templateUrl: './details.component.html',
  styleUrls: ['./details.component.less']
})
export class DetailsComponent implements OnInit {

  singlePost: Post = new Post();
  currentId: number;


  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private dataService: DataService
  ) {
    this.route.params.subscribe(res => {
      this.currentId = res.id;
      console.log(this.currentId);
    });
  }

  ngOnInit() {
    this.dataService.getPostsById(this.currentId).subscribe(
      res => {
        this.singlePost = <Post>res;
        this.singlePost.username = this.dataService.getNameById(this.singlePost.userId);
      },
      err => {
        this.router.navigate(['**']);
      }
    );
  }

}
