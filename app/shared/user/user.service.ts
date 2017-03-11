import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";
import { Config } from "../config";

@Injectable()
export class UserService {    
  headers: Headers;
  constructor(private http: Http) {
    this.headers = new Headers();
    this.headers.append("Content-Type", "application/json");
  }

  register(user: User) {
    alert("About to register: " + user.email);
  }

  login(user: User) {    

    return this.http.post(
      Config.apiUrl + "/login_api",
      JSON.stringify({
        email: user.email,        
        pass: user.password
      }),
      { headers: this.headers }
    )
    .map(res => {
      let response = res.json();      
      let data = {email: response.data.user && response.data.user.email?response.data.user.email:'',
                  name: response.data.user && response.data.user.name?response.data.user.name:'',
                  token: response.data.token?response.data.token:'',
                  message: response.message?response.message:'',
                  status: response.status};
      return data;      
    })
    .do(data => {
      if (data.status == 'success' && data.token != ''){
        Config.token = data.token;        
      }else{        
        Config.token = '';        
      }
    })
    .catch(this.handleErrors);
  }

  handleErrors(error: Response) {
    console.log(JSON.stringify(error.json()));
    return Observable.throw(error);
  }

}