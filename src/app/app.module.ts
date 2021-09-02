import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavbarComponent } from './user/navbar/navbar.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { AngularMaterialModule } from './angular-material.module';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { CarouselComponent } from './shared/carousel/carousel.component';
import {IvyCarouselModule} from 'angular-responsive-carousel';
import { HomeComponent } from './user/home/home.component';
import { FooterComponent } from './user/footer/footer.component';
import { OurServicesComponent } from './user/our-services/our-services.component';
import { AboutUsComponent } from './user/about-us/about-us.component';
import { ContactUsComponent } from './user/contact-us/contact-us.component';
import { HttpClientModule } from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { CKEditorModule } from '@ckeditor/ckeditor5-angular';
/** Admin Components */
import { DashboardComponent} from './admin/dashboard/dashboard.component';
import { AContactUsComponent} from './admin/dashboard/a-contact-us/a-contact-us.component';
import { AContactUsDetailsComponent} from './admin/dashboard/a-contact-us/a-contact-us-details/a-contact-us-details.component';
import {UserComponent} from './user/user.component';
import {QuotesComponent} from './admin/dashboard/quotes/quotes.component';
import {AddQuotesComponent} from './admin/dashboard/quotes/add-quotes/add-quotes.component';
import {ViewQuotesComponent} from './admin/dashboard/quotes/view-quotes/view-quotes.component';
import {AAboutUsComponent} from './admin/dashboard/a-about-us/a-about-us.component';


@NgModule({
  declarations: [
    AppComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
    FooterComponent,
    OurServicesComponent,
    AboutUsComponent,
    ContactUsComponent,
    DashboardComponent,
    AContactUsComponent,
    AContactUsDetailsComponent,
    UserComponent,
    QuotesComponent,
    AddQuotesComponent,
    ViewQuotesComponent,
    AAboutUsComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    AngularMaterialModule,
    IvyCarouselModule,
    ReactiveFormsModule,
    HttpClientModule,
    NgbModule,
    CKEditorModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
