import { HttpClient } from "@angular/common/http";
import { Injectable } from "@angular/core";
import { Utilisator } from "./utilisator.model";
import { Observable } from "rxjs";

@Injectable({
    providedIn: "root"
})
export class UtilisatorService {

    utilisator : Utilisator |any;

    private _url : string = 'http://localhost:8080/api_utilisators';

    constructor(private httpClient : HttpClient) { }

    getUtilisatorByName(name : string) : Observable<Utilisator> {
        return this.httpClient.get<Utilisator>(this._url + "/" + name);
      }
}