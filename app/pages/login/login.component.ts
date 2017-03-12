import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { User } from "../../shared/user/user";
import { UserService } from "../../shared/user/user.service";
import { Router } from "@angular/router";
import { Page } from "ui/page";
import { Color } from "color";
import { View } from "ui/core/view";

@Component({
  moduleId: module.id,
  selector: "my-app",
  providers: [UserService],
  templateUrl: 'login.html',
  styleUrls: ["login-common.css", "login.css"]
})
export class LoginComponent implements OnInit {  
  user: User;
  isLoggingIn: Boolean = true;
  @ViewChild("container") container: ElementRef;

  constructor(private router: Router, private userService: UserService, private page: Page){
    this.user = new User();
    this.user.email = 'adm@adm.com';
    this.user.password = 'a1s2d3f4'
  }

  ngOnInit() {    
    this.page.actionBarHidden = true;
    //this.page.backgroundImage = "res://bg_login";
  }

  submit() {    
    if (this.isLoggingIn) {
      this.login();
    } else {
      this.signUp();
    }
  }

  login() {
    this.userService.login(this.user)
    .subscribe(
      response => {         
        if (response.token != ''){
          this.page.actionBarHidden = false;
          this.router.navigate(["/clients"]);
        }else{
          alert(response.message);
        }        
      },
      (error) => alert(error.message)
    );
  }
  
  signUp() {
    this.userService.register(this.user);
  }

  toggleDisplay() {    
    this.isLoggingIn = !this.isLoggingIn;
    <View>this.container.nativeElement
          .animate({
            backgroundColor: this.isLoggingIn ? new Color("white") : new Color("#301217"),
            duration: 200
          });
  }
} 