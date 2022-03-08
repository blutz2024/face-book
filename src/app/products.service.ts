import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { CardModel } from "./card.model";

@Injectable({
providedIn: 'root'
})

export class ProductsService{
    private baseUrl: string = "https://face-book-bf177-default-rtdb.firebaseio.com/";
    private productsEndpoint: string = "product.json";

    constructor(private http:HttpClient){

    }

    public getProducts(){
        return this.http.get<CardModel []>(this.baseUrl + this.productsEndpoint);
    }


    //one element 
    public getProduct(index:number){
        return this.http.get<CardModel>(this.baseUrl + 'product/' + index + '.json');
    }




}