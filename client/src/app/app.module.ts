import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';

import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { NavbarComponent } from './navbar/navbar.component';
import { CollectionsComponent } from './collections/collections.component';
import { ContactComponent } from './contact/contact.component';
import { OurstoryComponent } from './ourstory/ourstory.component';
import { FooterComponent } from './footer/footer.component';
import { AdminComponent } from './admin/admin.component';
import { LoginComponent } from './login/login.component';
import { CustomtablesComponent } from './customtables/customtables.component';
import { StoolsComponent } from './stools/stools.component';
import { DiningComponent } from './dining/dining.component';
import { RegistrationComponent } from './registration/registration.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { AddproductComponent } from './addproduct/addproduct.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    CollectionsComponent,
    ContactComponent,
    OurstoryComponent,
    FooterComponent,
    AdminComponent,
    LoginComponent,
    CustomtablesComponent,
    StoolsComponent,
    DiningComponent,
    RegistrationComponent,
    DashboardComponent,
    AddproductComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
