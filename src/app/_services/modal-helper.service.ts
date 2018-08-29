import {Injectable} from '@angular/core';
import {BsModalService} from "ngx-bootstrap/modal";
import {HttpErrorPopupComponent} from "../http-error-popup/http-error-popup.component";

@Injectable()
export class ModalHelperService {

  constructor(private modalService: BsModalService) {
  }

  showHttpError(name?: string, message?: string) {
    const initialState = {
      name: name,
      message: message
    };
    this.modalService.show(HttpErrorPopupComponent, {initialState});
  }
}
