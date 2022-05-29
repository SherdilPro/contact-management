import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { IContactsService } from 'src/interfaces/icontacts-service';
import { ContactDetailList } from 'src/mockData/contact-detail-list';
import { ContactList } from 'src/mockData/contact-list';
import { Contact } from 'src/objects/contact';
import { ContactDetail } from 'src/objects/contact-detail';

@Injectable({
  providedIn: 'root'
})
export class ContactsService implements IContactsService {

  constructor() { }
  getContacts(): Observable<Contact[]> {
    return of(ContactList);
  }
  getContact(id: number): Observable<ContactDetail|undefined> {
    return of(ContactDetailList.find(a=> a.Id==id));
  }
  getContactEmails(id: number): Observable<string[]| undefined> {
    return of(ContactDetailList.find(a=> a.Id==id)?.Email);
  }
}
