import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Room } from "./room";
import { Config } from "../config";

@Injectable()
export class RoomService {    
  headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
  }

  list(apartment_id) {    

    return this.http.get(
      Config.apiUrl + "/hotels/list_of_rooms?"+
                      "token=" + Config.token+
                      "&apartment_id=" + apartment_id,      
      { headers: this.headers }
    )
    .map(res => res.json())
    .map(data => {      
      let rooms: Array<Room> = [];
      data.data.forEach( item => {
        rooms.push(
          new Room(item.id, 
                    item.description, 
                    item.number, 
                    item.apartment_id, 
                    item.price_month,
                    item.price_secure,
                    (item.status == 0),
                    Config.siteUrl+item.photo_url)
        );
      });
      return rooms;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

}