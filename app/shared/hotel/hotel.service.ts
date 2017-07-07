import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Hotel } from "./hotel";
import { Config } from "../config";

@Injectable()
export class HotelService {    
  headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
  }

  list() {    

    return this.http.get(
      Config.apiUrl + "/hotels?token=" + Config.token,
      { headers: this.headers }
    )
    .map(res => res.json())
    .map(data => {      
      let hotels: Array<Hotel> = [];
      data.data.forEach( item => {
        hotels.push(
          new Hotel(item.id, 
										item.description, 
										item.address, 
										item.cep, 
										item.free_rooms,										
										Config.siteUrl+item.photo_url
					)
        );
      });
      return hotels;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

}