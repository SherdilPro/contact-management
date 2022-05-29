import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { ContactsService } from 'src/services/contacts.service';

@Component({
  selector: 'app-email-addresses',
  templateUrl: './email-addresses.component.html',
  styleUrls: ['./email-addresses.component.css']
})
export class EmailAddressesComponent implements OnInit {

  contactId:any;
  contactEmails:string[]=[];
  constructor(
    private _contactService:ContactsService,
    private router: ActivatedRoute) { }

  ngOnInit(): void {
    this.contactId = this.router.snapshot.params['id'];
    if(this.contactId)
    {
      this.getContactEmails()
    }
  }

  getContactEmails()
  {
    this._contactService.getContactEmails(this.contactId).subscribe((result:string[]|undefined)=> result && (this.contactEmails = result))
  }

}
