import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import {HomeComponent} from './home/home.component';
import {ContactComponent} from './contact/contact.component';
import {CollectionsComponent} from './collections/collections.component';
import {OurstoryComponent} from './ourstory/ourstory.component';
import {AdminComponent} from './admin/admin.component';
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

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'events', component: EventsComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'ourstory', component: OurstoryComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'login', component: LoginComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/dashboard/addproduct', component: AddproductComponent },
  { path: 'admin/dashboard/pageslist', component: PageslistComponent },
  { path: 'admin/dashboard/bloglist', component: BloglistComponent },
  { path: 'admin/dashboard/eventslist', component: EventslistComponent },
  { path: 'admin/dashboard/newblog', component: NewblogComponent },
  { path: 'admin/dashboard/newevent', component: NeweventComponent },
  { path: 'admin/dashboard/userslist', component: UserslistComponent },
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
