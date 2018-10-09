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
import { ProductlistComponent } from './productlist/productlist.component';
import { DashboardlistComponent } from './dashboardlist/dashboardlist.component';
import { PageslistComponent } from './pageslist/pageslist.component';
import { BlogComponent } from './blog/blog.component';
import { BloglistComponent } from './bloglist/bloglist.component';
import { UserslistComponent } from './userslist/userslist.component';
import { AdminheaderComponent } from './adminheader/adminheader.component';
import { DataService } from './data.service';
import { AuthService} from './auth.service';
import { AuthGuardService} from './auth-guard.service'
import { RoleGuardService } from './role-guard.service'
import { HttpClientModule } from '@angular/common/http';
import { FormsModule,ReactiveFormsModule } from '@angular/forms';
import { NotfoundComponent } from './notfound/notfound.component';
import { NewblogComponent } from './newblog/newblog.component';
import { EventslistComponent } from './eventslist/eventslist.component';
import { EventsComponent } from './events/events.component';
import { NeweventComponent } from './newevent/newevent.component';
import { EditeventComponent } from './editevent/editevent.component';
import { HTTP_INTERCEPTORS } from '@angular/common/http';
import { TokenInterceptorService } from './token-interceptor.service'

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
    ProductlistComponent,
    DashboardlistComponent,
    PageslistComponent,
    BlogComponent,
    BloglistComponent,
    UserslistComponent,
    AdminheaderComponent,
    NotfoundComponent,
    NewblogComponent,
    EventslistComponent,
    EventsComponent,
    NeweventComponent,
    EditeventComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
  ],
  providers: [DataService,RoleGuardService, AuthService, AuthGuardService,{provide: HTTP_INTERCEPTORS,useClass: TokenInterceptorService, multi: true
  }],
  bootstrap: [AppComponent]
})
export class AppModule { }
