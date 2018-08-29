import {Component, OnInit} from '@angular/core';
import {DataService} from "../_services/data.service";
import {SessionService} from "../_services/session.service";
import {Post} from "../_model/Post";
import {animate, keyframes, query, stagger, style, transition, trigger} from "@angular/animations";
import {BsModalService} from "ngx-bootstrap";
import {ModalHelperService} from "../_services/modal-helper.service";

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less'],
  animations: [
    trigger('listAnimation', [
      transition('* => *', [
        query(':enter', style({opacity: 0}), {optional: true}),
        query(':enter', stagger('1000ms', [
          animate('.7s ease-in', keyframes([
            style({opacity: 1}),
          ]))
        ]), {optional: true})
      ])
    ])
  ]
})
export class HomeComponent implements OnInit {

  posts: Post[] = [];
  searchBox: string = "";

  constructor(
    private dataService: DataService,
    private session: SessionService,
    private modalService: BsModalService,
    private modalHelper: ModalHelperService
  ) {
  }

  ngOnInit() {
    this.dataService.getPosts().subscribe(
      (res: any) => {
        res.forEach(p => p.username = this.dataService.getNameById(p.userId));
        this.posts = res;
      },
      err => this.modalHelper.showHttpError(err.name, err.message)
    );
  }

  logoutBtn() {
    this.session.logoutUser();
  }

}
