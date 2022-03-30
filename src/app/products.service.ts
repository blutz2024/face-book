import { Injectable } from "@angular/core";
import { CardModel } from "./card.model";
import { AngularFireDatabase } from '@angular/fire/compat/database';
@Injectable({
providedIn: 'root'
})

export class ProductsService{

    constructor(private db: AngularFireDatabase){

    }

    public getProducts(){
        //ProductItemModel
        return this.db.list<CardModel>("product").valueChanges();
    }


    //one element 
    public getProduct(index:number){
    }

    addStory(card : CardModel){
        this.db.list<CardModel>("product").push(card);
    }


}