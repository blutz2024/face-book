import { Component, OnInit } from "@angular/core";
import { CardModel } from "../card.model";
import { ProductsService } from "../products.service";


@Component({
    selector: 'fb-form',
    templateUrl: 'form.component.html',
    styleUrls: ['form.component.css']
})

export class FormComponent implements OnInit{

    constructor(private ps : ProductsService){
        
    }

    ngOnInit(): void{

    }
    addStory(card : CardModel){
       console.log("You clicked add story");
       console.log(card);
        this.ps.addStory(card);
    }
}