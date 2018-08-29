import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';
import {HttpClientModule} from "@angular/common/http";
import {FormsModule, ReactiveFormsModule} from "@angular/forms";
import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {HomeComponent} from './home/home.component';
import {LoginComponent} from './login/login.component';
import {ModalModule, TooltipModule} from "ngx-bootstrap";
import {DetailsComponent} from './details/details.component';
import {DataService} from "./_services/data.service";
import {SessionService} from "./_services/session.service";
import {CanActivateRouterService} from "./_services/can-activate-router.service";
import {NotFoundComponent} from './not-found/not-found.component';
import {NgPipesModule} from "ngx-pipes";
import {BrowserAnimationsModule} from "@angular/platform-browser/animations";
import {HttpErrorPopupComponent} from './http-error-popup/http-error-popup.component';
import {ModalHelperService} from "./_services/modal-helper.service";

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    DetailsComponent,
    NotFoundComponent,
    HttpErrorPopupComponent
  ],
  entryComponents: [
    HttpErrorPopupComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    TooltipModule.forRoot(),
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule,
    NgPipesModule,
    BrowserAnimationsModule,
    ModalModule.forRoot()
  ],
  providers: [
    DataService,
    SessionService,
    CanActivateRouterService,
    ModalHelperService
  ],
  bootstrap: [AppComponent],
})
export class AppModule {
}
