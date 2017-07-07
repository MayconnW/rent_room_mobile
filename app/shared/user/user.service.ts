import { Injectable } from "@angular/core";
import { Http, Headers, Response } from "@angular/http";
import { Observable } from "rxjs/Rx";
import "rxjs/add/operator/do";
import "rxjs/add/operator/map";

import { User } from "./user";
import { UserApi } from "./user.api";
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
      let responseUser = response.data.user;
      let data = {id: responseUser && responseUser.id?responseUser.id:'',
                  email: responseUser && responseUser.email?responseUser.email:'',
                  name: responseUser && responseUser.name?responseUser.name:'',
                  photo_url: responseUser && responseUser.photo_url?responseUser.photo_url:'',
                  token: response.data.token?response.data.token:'',
                  message: response.message?response.message:'',
                  status: response.status};
      return data;      
    })
    .do(data => {
      if (data.status == 'success' && data.token != ''){
        Config.token = data.token; 
        Config.userApi = new UserApi(data.id,
                                     data.email,
                                     data.name,
                                     Config.siteUrl+data.photo_url);
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