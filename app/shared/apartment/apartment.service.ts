import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Apartment } from "./apartment";
import { Config } from "../config";

@Injectable()
export class ApartmentService {    
  headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
  }

  list(hotel_id: string) {        
    return this.http.get(
      Config.apiUrl + "/hotels/list_of_apartments?"+
                      "token=" + Config.token+
                      "&hotel_id=" + hotel_id,
      { headers: this.headers }
    )
    .map(res => res.json())
    .map(data => {      
      let apartments: Array<Apartment> = [];
      data.data.forEach( item => {
        apartments.push(
          new Apartment(item.id, 
                        item.description, 
                        item.number, 
                        item.hotel_id,                         
                        Config.siteUrl+item.photo_url
					)
        );
      });      
      return apartments;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

}