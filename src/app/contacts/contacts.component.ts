import { Component, OnInit } from '@angular/core';
import { Contact } from 'src/objects/contact';
import { ContactDetail } from 'src/objects/contact-detail';
import { ContactsService } from 'src/services/contacts.service';

@Component({
  selector: 'app-contacts',
  templateUrl: './contacts.component.html',
  styleUrls: ['./contacts.component.css']
})
export class ContactsComponent implements OnInit {

  contactDetail:ContactDetail=new ContactDetail();
  contacts:Contact[]=[];
  constructor(
    private _mockContactService:ContactsService
  ) { }

  ngOnInit(): void {
    this.getAllContacts();
  }

  getAllContacts()
  {
    this._mockContactService.getContacts().subscribe((result: Contact[])=>this.contacts=result);
  }

  getContactDetail(id:number)
  {
    this._mockContactService.getContact(id).subscribe((result:ContactDetail|undefined)=>result && (this.contactDetail = result))
  }

}
