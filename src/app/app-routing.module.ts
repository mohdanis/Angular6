import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RouterModule,Routes} from '@angular/router';
import { HomeComponent } from './home/home.component';
import { NewslistingComponent } from './newslisting/newslisting.component';
const routes:Routes = [
  {path:'home/:id',component:HomeComponent},
  {path:'newslisting',component:NewslistingComponent},
  { path: '', redirectTo: '/home/:id', pathMatch: 'full' },
];
@NgModule({
  imports: [
    CommonModule,
    RouterModule.forRoot(routes,{ useHash: false })
  ],
  exports: [ RouterModule ],
  declarations: []
})
export class AppRoutingModule { }
