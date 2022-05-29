import { Observable } from "rxjs";
import { Contact } from "src/objects/contact";
import { ContactDetail } from "src/objects/contact-detail";

export interface IContactsService {
    // returns observable that resolves all List of Contacts
    getContacts() : Observable<Contact[]>;

    // returns observable contact detail by id
    getContact(id:number) : Observable<ContactDetail|undefined>;

    // returns observable email addresses by contact id
    getContactEmails(id:number) : Observable<string[]| undefined>;

}
