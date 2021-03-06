import { NgModule } from "@angular/core";
import { Routes, RouterModule } from "@angular/router";

import { HomePage } from "./home.page";

const routes: Routes = [
  {
    path: "",
    component: HomePage,
    children: [
      {
        path: "recommend",
        children: [
          {
            path: "",
            loadChildren: () =>
              import("../pages/recommend/recommend.module").then(
                m => m.RecommendPageModule
              )
          }
        ]
      },
      {
        path: "classfiy",
        children: [
          {
            path: "",
            loadChildren: () =>
            import("../pages/classfiy/classfiy.module").then(
              m => m.ClassfiyPageModule
            )
              
          }
        ]
      },
      {
        path: "support",
        children: [
          {
            path: "",
            loadChildren: () =>
            import("../pages/support/support.module").then(
              m => m.SupportPageModule
            )
              
          }
        ]
      },
      {
        path: "me",
        children: [
          {
            path: "",
            loadChildren: () =>
            import("../pages/me/me.module").then(m => m.MePageModule)
              
          }
        ]
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomePageRoutingModule {}
