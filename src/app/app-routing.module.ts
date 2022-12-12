import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUserComponent } from './user/about-user/about-user.component';
import { StatComponent } from './user/stat/stat.component';
import { UserComponent } from './user/user.component';

const routes: Routes = [{
  path: 'user/:name',
  component: UserComponent,
  children: [
    {
      path: 'stat',
      component: StatComponent
    },
    {
      path: 'about',
      component: AboutUserComponent
    }
  ]
}];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
