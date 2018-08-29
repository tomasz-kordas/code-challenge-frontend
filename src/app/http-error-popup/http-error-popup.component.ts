import {Component, Input} from '@angular/core';
import {BsModalRef, BsModalService} from "ngx-bootstrap/modal";

@Component({
  selector: 'app-popup',
  templateUrl: './http-error-popup.component.html',
  providers: [BsModalService]
})
export class HttpErrorPopupComponent {
  @Input() title: string = 'Connection error';
  @Input() name: string = 'Error name';
  @Input() message: string = 'Error message';

  constructor(public bsModalRef: BsModalRef) {
  }

  closeBtn() {
    this.bsModalRef.hide();
  }

}
