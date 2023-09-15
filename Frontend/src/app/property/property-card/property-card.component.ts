import { Component } from "@angular/core";

@Component({
    selector:'app-property-card',
   // template:`<h1>I am Gagan</h1>`,
   templateUrl:'property-card.component.html',
    //styles: ['h1{font-weight: normal;}']
    styleUrls:['property-card.component.css']
})
export class propertycardcomponent{

   property: any | undefined = {

    "ID" : 1,
    "Name": "Virat Kohli",
    "Type": "Batsman",
    "Country" : "India"
   }

    }

