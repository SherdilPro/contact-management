import { Designation } from "src/enums/designation";
import { Contact } from "src/objects/contact";

export const ContactList:Contact[]= [
    {
        Id : 1,
        Designation:Designation.Developer,
        FirstName:'Nicholes',
        LastName:'Gordon',
        Phone:['+924031234567','+953031234567'],
    },
    {
        Id : 2,
        Designation:Designation.SalesManager,
        FirstName:'Bradley',
        LastName:'Malone',
        Phone:['+924011234567','+953021234567']
    },
    {
        Id : 3,
        Designation:Designation.ProjectManager,
        FirstName:'Johanna',
        LastName:'Stevens',
        Phone:['+924011234567','+953021234567']
    },
    {
        Id : 4,
        Designation:Designation.Designer,
        FirstName:'Marvin',
        LastName:'Lambert',
        Phone:['+924011234765','+953021234746']
    },
    {
        Id : 5,
        Designation:Designation.PRagent,
        FirstName:'Teresa',
        LastName:'Lloyd',
        Phone:['+924011243765','+953012234746']
    },
    {
        Id : 6,
        Designation:Designation.SupportTeam,
        FirstName:'Fred',
        LastName:'Haynes',
        Phone:['+924011234765','+953012237446']
    },
    {
        Id : 7,
        Designation:Designation.Developer,
        FirstName:'Brian',
        LastName:'Watson',
        Phone:['+924011237565','+953017237446']
    },
    {
        Id : 8,
        Designation:Designation.Developer,
        FirstName:'hettie',
        LastName:'Richardson',
        Phone:['+924011327565','+953018937446']
    }

]
