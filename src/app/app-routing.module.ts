import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ContactsComponent } from './contacts/contacts.component';
import { EmailAddressesComponent } from './contacts/email-addresses/email-addresses.component';

const routes: Routes = [
  {
    path: 'contacts', component: ContactsComponent
  },
  {
    path: 'contacts/:id/email-addresses', component: EmailAddressesComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
