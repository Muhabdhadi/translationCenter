import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { HomeComponent } from './user/home/home.component';
import { OurServicesComponent } from './user/our-services/our-services.component';
import { DashboardComponent } from './admin/dashboard/dashboard.component';
import { AContactUsComponent } from './admin/dashboard/a-contact-us/a-contact-us.component';
import {AContactUsDetailsComponent} from './admin/dashboard/a-contact-us/a-contact-us-details/a-contact-us-details.component';
import {UserComponent} from './user/user.component';

const routes: Routes = [
    { path: '', redirectTo: 'user/home', pathMatch: 'full' },

    { path: 'user', component: UserComponent, children: [
            { path: 'home', component: HomeComponent },
            { path: 'services', component: OurServicesComponent },
            { path: 'aboutus', component: AboutUsComponent },
            { path: 'contactus', component: ContactUsComponent },
        ]},

  { path: 'dashboard', component: DashboardComponent, children: [
      { path: 'contact-us', component: AContactUsComponent },
      { path: 'contactus-details', component: AContactUsDetailsComponent } // it has a params
    ]}

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
