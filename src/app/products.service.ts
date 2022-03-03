import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { ProductItemModel } from "./product-item.model";

@Injectable({
providedIn: 'root'
})

export class ProductsService{
    private baseUrl: string = "https://face-book-bf177-default-rtdb.firebaseio.com/product.json";
    private productsEndpoint: string = "product.json";

    constructor(private http:HttpClient){

    }

    public getProducts(){
        return this.http.get<ProductItemModel []>(this.baseUrl + this.productsEndpoint);
    }


    //one element 
    public getProduct(index:number){
        return this.http.get<ProductItemModel>(this.baseUrl + 'product/' + index + '.json');
    }




}