import { Injectable } from "@angular/core";
import { Http, Headers } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/map";

import { Client } from "./client";
import { Config } from "../config";

@Injectable()
export class ClientService {    
  headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
  }

  list() {    

    return this.http.get(
      Config.apiUrl + "/clients?token=" + Config.token,
      { headers: this.headers }
    )
    .map(res => res.json())
    .map(data => {      
      let clients: Array<Client> = [];
      data.data.forEach( item => {
        clients.push(
          new Client(item.id, 
										item.first_name, 
										item.last_name, 
										item.born, 
										item.country,
										item.phone,
										Config.siteUrl+item.photo_url
					)
        );
      });
      return clients;
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

}