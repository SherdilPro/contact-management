import { Designation } from "src/enums/designation";

export class ContactDetail {
    Id?:number;
    FirstName:string='';
    LastName:string='';
    Designation?:Designation=undefined;
    Bio:string='';
    Email:string[]=[];
    Dial:string='';
    Meeting:string='';
    Phone:string[]=[];
}
