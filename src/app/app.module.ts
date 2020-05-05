import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from "@angular/forms";
import { HttpClientModule } from "@angular/common/http";
import { CommonModule } from '@angular/common';
import { CookieModule } from "ngx-cookie";
import { AngularFontAwesomeModule } from 'angular-font-awesome';
// import { ModalModule } from 'ngx-bootstrap/modal';
import { ModalModule } from 'ngb-modal';
import {MatTabsModule} from '@angular/material/tabs';

import { AppComponent } from './app.component';
import { AuthComponent } from './components/auth/auth.component';
import { LoginComponent } from './components/auth/login/login.component';
import { ForgotPasswordComponent } from './components/auth/forgot-password/forgot-password.component';
import { MainComponent } from './components/main/main.component';
import { DashboardComponent } from './components/main/dashboard/dashboard.component';
import { OrdersComponent } from './components/main/orders/orders.component';
import { ReceiveItemsComponent } from './components/main/receive-items/receive-items.component';
import { RefundsComponent } from './components/main/refunds/refunds.component';
import { ReloacationComponent } from './components/main/reloacation/reloacation.component';
import { IdentifyPackageComponent } from './components/main/receive-items/identify-package/identify-package.component';
import { PendingEvaluationComponent } from './components/main/receive-items/pending-evaluation/pending-evaluation.component';
import { FindReturnComponent } from './components/main/receive-items/identify-package/find-return/find-return.component';
import { FindRelatedComponent } from './components/main/receive-items/identify-package/find-related/find-related.component';
import { TrackNumberComponent } from './components/main/receive-items/identify-package/track-number/track-number.component';
import { OrderNumberComponent } from './components/main/receive-items/identify-package/order-number/order-number.component';
import { AddUnidentifiedComponent } from "./components/main/receive-items/identify-package/add-unidentified/add-unidentified.component";
import { EvaluateItemComponent } from "./components/main/receive-items/identify-package/evaluate-item/evaluate-item.component";
import { RoutingModule } from './modules/routing.module';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

import { DragDropDirective } from './directives/drap-drop.directive';

@NgModule({
  declarations: [
    AppComponent,
    AuthComponent,
    LoginComponent,
    ForgotPasswordComponent,
    MainComponent,
    DashboardComponent,
    OrdersComponent,
    ReceiveItemsComponent,
    RefundsComponent,
    ReloacationComponent,
    IdentifyPackageComponent,
    PendingEvaluationComponent,
    FindReturnComponent,
    TrackNumberComponent,
    OrderNumberComponent,
    AddUnidentifiedComponent,
    EvaluateItemComponent,
    FindRelatedComponent,
    DragDropDirective
  ],
  imports: [
    BrowserModule,
    RoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    CommonModule,
    AngularFontAwesomeModule,
    CookieModule.forRoot(),
    ModalModule,
    BrowserAnimationsModule,
    MatTabsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
