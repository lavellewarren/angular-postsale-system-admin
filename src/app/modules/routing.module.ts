import { NgModule } from '@angular/core';
import { Routes, RouterModule } from "@angular/router";
import { AuthComponent } from '../components/auth/auth.component';
import { LoginComponent } from '../components/auth/login/login.component';
import { ForgotPasswordComponent } from '../components/auth/forgot-password/forgot-password.component';
import { MainComponent } from '../components/main/main.component';
import { DashboardComponent } from '../components/main/dashboard/dashboard.component';
import { OrdersComponent } from '../components/main/orders/orders.component';
import { ReceiveItemsComponent } from '../components/main/receive-items/receive-items.component';
import { IdentifyPackageComponent } from '../components/main/receive-items/identify-package/identify-package.component';
import { PendingEvaluationComponent } from '../components/main/receive-items/pending-evaluation/pending-evaluation.component';
import { RefundsComponent } from '../components/main/refunds/refunds.component';
import { ReloacationComponent } from '../components/main/reloacation/reloacation.component';
import { FindReturnComponent } from '../components/main/receive-items/identify-package/find-return/find-return.component';
import { TrackNumberComponent } from '../components/main/receive-items/identify-package/track-number/track-number.component';
import { OrderNumberComponent } from '../components/main/receive-items/identify-package/order-number/order-number.component';
import { AddUnidentifiedComponent } from "../components/main/receive-items/identify-package/add-unidentified/add-unidentified.component";
import { EvaluateItemComponent } from "../components/main/receive-items/identify-package/evaluate-item/evaluate-item.component";
import { FindRelatedComponent } from '../components/main/receive-items/identify-package/find-related/find-related.component';

const routes: Routes = [
  {
      path: "",
      redirectTo: "/app/dashboard",
      pathMatch: "full"
  },
  {
      path: "auth",
      component: AuthComponent,
      children: [
          {
              path: "",
              redirectTo: "login",
              pathMatch: "full"
          },
          {
              path: "login",
              component: LoginComponent
          },
          {
              path: "forgot-password",
              component: ForgotPasswordComponent
          }
      ]
  },
  {
      path: "app",
      component: MainComponent,
      children: [
        {
          path: "",
          redirectTo: "dashboard",
          pathMatch: "full"
        },
        {
            path: "dashboard",
            component: DashboardComponent,
        },
        {
            path: "orders",
            component: OrdersComponent
        },
        {
            path: "receiveItems",
            component: ReceiveItemsComponent,
            children: [
              {
                  path: "identifyPackage",
                  component: IdentifyPackageComponent,
                  children: [
                        {
                            path: "findreturn",
                            component: FindReturnComponent
                        },
                        {
                            path: "findrelated",
                            component: FindRelatedComponent
                        },
                        {
                            path: 'tracknum',
                            component: TrackNumberComponent
                        },
                        {
                            path: 'ordernum',
                            component: OrderNumberComponent
                        },
                        {
                            path: 'addpackage',
                            component: AddUnidentifiedComponent
                        },
                        {
                            path: 'evaluate',
                            component: EvaluateItemComponent
                        }
                  ]
              },
              {
                path: "pendingEvaluation",
                component: PendingEvaluationComponent
            }
          ]
        },
        {
            path: "refunds",
            component: RefundsComponent
        },
        {
            path: "relocation",
            component: ReloacationComponent
        }
      ]
  },
  {
      path: "**",
      redirectTo: "/app/dashboard"
  }
]


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class RoutingModule { }
