import {Injectable} from "@angular/core";
import {HttpClient} from "@angular/common/http";
import { environment } from "src/environments/environment";
@Injectable({
    providedIn: 'root'

})
export class AuthenticationService {
baseUrl:string = "https://identitytoolkit.googleapis.com/vl/accounts";
signUpEndpoint: string = "signUp";

public constructor(private http:HttpClient){

}

public signup(email:string, password:string){
    const requestBody = {
        "email": email,
        "password": password,
        "returnSecureToken":true
    };

    return this.http.post(this.baseUrl + ":" + this.signUpEndpoint + "?" + "key=" +environment.firebase.apiKey, requestBody);
}





}