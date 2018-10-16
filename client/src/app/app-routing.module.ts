import { NgModule } from '@angular/core';
import { Routes, RouterModule, CanActivate } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {CollectionsComponent} from './collections/collections.component';
import {OurstoryComponent} from './ourstory/ourstory.component';
import {CustomtablesComponent} from './customtables/customtables.component';
import {StoolsComponent} from './stools/stools.component';
import {DiningComponent} from './dining/dining.component';
import {RegistrationComponent} from './registration/registration.component'
import {DashboardComponent} from './dashboard/dashboard.component'
import {AddproductComponent} from './addproduct/addproduct.component'
import {PageslistComponent} from './pageslist/pageslist.component'
import {BlogComponent} from './blog/blog.component'
import {BloglistComponent} from './bloglist/bloglist.component'
import {UserslistComponent} from './userslist/userslist.component'
import {NewblogComponent} from './newblog/newblog.component'
import {NotfoundComponent} from './notfound/notfound.component'
import {LoginComponent} from './login/login.component'
import {EventslistComponent} from './eventslist/eventslist.component'
import {EventsComponent} from './events/events.component'
import {NeweventComponent} from './newevent/newevent.component'
import {EditeventComponent} from './editevent/editevent.component'
import { AuthGuardService as AuthGuard } from './auth-guard.service';
import { RoleGuardService as RoleGuard } from './role-guard.service';
import { ResetpasswordComponent} from './resetpassword/resetpassword.component'
import { ResetComponent} from './reset/reset.component'
import { ProfileComponent} from  './profile/profile.component'


const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'events', component: EventsComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'ourstory', component: OurstoryComponent },
  { path: 'login', component: LoginComponent },
  { path: 'profile', component: ProfileComponent },
  { path: 'reset/:token', component: ResetComponent },
  { path: 'reset-password', component: ResetpasswordComponent },
  { path: 'admin/dashboard', component: DashboardComponent, canActivate:[RoleGuard] },
  { path: 'admin/dashboard/addproduct', component: AddproductComponent,canActivate:[RoleGuard] },
  { path: 'admin/dashboard/pageslist', component: PageslistComponent, canActivate:[RoleGuard] },
  { path: 'admin/dashboard/bloglist', component: BloglistComponent, canActivate:[RoleGuard] },
  { path: 'admin/dashboard/eventslist', component: EventslistComponent, canActivate:[RoleGuard] },
  { path: 'admin/dashboard/newblog', component: NewblogComponent,canActivate:[RoleGuard] },
  { path: 'admin/dashboard/newevent', component: NeweventComponent,canActivate:[RoleGuard] },
  { path: 'admin/dashboard/editevent/:eventId', component: EditeventComponent, canActivate:[RoleGuard]},
  { path: 'admin/dashboard/userslist', component: UserslistComponent, canActivate:[RoleGuard] },
  { path: 'collections/customtables', component: CustomtablesComponent },
  { path: 'collections/stools', component: StoolsComponent },
  { path: 'collections/dining', component: DiningComponent },
  { path: 'registration', component: RegistrationComponent},
  { path: 'blog', component: BlogComponent},
  { path: '**', component: NotfoundComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
