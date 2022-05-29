import { Designation } from "src/enums/designation";

export class Contact {
    Id:number=0;
    FirstName:string='';
    LastName:string='';
    Designation:Designation=Designation.Developer;
    Phone?:string[]=[];

}
