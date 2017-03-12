import { Component, ElementRef, Injectable, OnInit, ViewChild, ChangeDetectorRef  } from "@angular/core";
import { Config } from "./shared/config";
import { Router } from "@angular/router";

import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";  

@Component({
  selector: "main",    
  templateUrl: "./pages/initial/initial.html",
  styleUrls: ["./pages/initial/initial-common.css"]  
})

export class AppComponent implements OnInit {
  itemsTopMenu:Array<Object>;
  itemsBottomMenu:Array<Object>;
  i: number;

  userApi = Config.userApi;

  constructor(private _changeDetectionRef: ChangeDetectorRef, 
              private router: Router) {      
    this.router = router;    
  }

  @ViewChild(RadSideDrawerComponent) 
    public drawerComponent: RadSideDrawerComponent;
    private drawer: SideDrawerType;    

  ngOnInit() {

    this.itemsTopMenu = [
            {
              name:"Home",
              icon: "ic_home_black_24dp",
              path: "/initial"
            },
            {
              name:"Clients",
              icon: "ic_people_black_24dp",
              path: "/clients"
            },
            {
              name:"Hotels",
              icon: "ic_domain_black_24dp",
              path: "/hotels"
            }
        ]; 

    this.itemsBottomMenu = [
            {
              name:"About",
              icon: "ic_live_help_black_24dp"},
            {
              name:"Sair",
              icon: "ic_cancel_black_24dp"}
        ]; 

    this.router.events.subscribe((event) => {
            this.drawer.closeDrawer();
        });
  }

  ngAfterViewInit() {
    this.drawer = this.drawerComponent.sideDrawer;
    this._changeDetectionRef.detectChanges();        
  }

  public openDrawer() {      
    this.drawer.toggleDrawerState();
  }  

}
