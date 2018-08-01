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

const routes: Routes = [
  { path: '', component: HomeComponent, pathMatch: 'full' },
  { path: 'contact', component: ContactComponent },
  { path: 'collections', component: CollectionsComponent },
  { path: 'ourstory', component: OurstoryComponent },
  { path: 'admin', component: AdminComponent },
  { path: 'admin/dashboard', component: DashboardComponent },
  { path: 'admin/dashboard/addproduct', component: AddproductComponent },
  { path: 'collections/customtables', component: CustomtablesComponent },
  { path: 'collections/stools', component: StoolsComponent },
  { path: 'collections/dining', component: DiningComponent },
  { path: 'registration', component: RegistrationComponent}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
