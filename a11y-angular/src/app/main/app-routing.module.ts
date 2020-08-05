import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LandingPageComponent } from '../pages/landing-page/landing-page.component';
import { SidePageComponent } from '../pages/side-page/side-page.component';

const appPath = {
  home: '',
  sidepage: 'sidePage',
};

const routes: Routes = [
  {
    path: appPath.home,
    component: LandingPageComponent,
  },
  {
    path: appPath.sidepage,
    component: SidePageComponent,
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
