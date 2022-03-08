import { Component } from "@angular/core";
import { CardModel } from "./card.model";
import { ProductsService } from "./products.service";
@Component({
    selector: 'fb-home-layout',
    templateUrl: 'home-layout.component.html',
    styleUrls:['home-layout.component.css']
})

export class HomeLayoutComponent{
//7:32
     cards: CardModel[] = []; 

     constructor(private ProductsService: ProductsService){

     }

     ngOnInit(){
        this.ProductsService.getProducts().subscribe(data=> {
            console.log(data);
            for(var card of data){
                this.cards.push(card);

             }
        });
     }
}