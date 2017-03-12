import { Component, ElementRef, Injectable, OnInit, ViewChild, ChangeDetectorRef } from "@angular/core";
import { Room } from "../../shared/room/room";
import { RoomService } from "../../shared/room/room.service";
import { Config } from "../../shared/config";

import { RadSideDrawerComponent, SideDrawerType } from "nativescript-telerik-ui/sidedrawer/angular";  

@Component({
	moduleId: module.id,
  selector: "list",
  templateUrl: "list.html",
  styleUrls: ["list-common.css", "list.css"],
  providers: [RoomService]
})
export class ListComponent implements OnInit {  

  itemsTopMenu:Array<Object>;
  itemsBottomMenu:Array<Object>;
  list: Array<Room> = [];  
  i: number;

  userApi = Config.userApi;

  constructor(private service: RoomService,              
              private _changeDetectionRef: ChangeDetectorRef) {       
    this.itemsTopMenu = [
            {
              name:"Home",
              icon: "ic_home_black_24dp"
            },
            {
              name:"Clients",
              icon: "ic_people_black_24dp"},
            {
              name:"Hotels",
              icon: "ic_domain_black_24dp"
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
  }

  @ViewChild(RadSideDrawerComponent) 
    public drawerComponent: RadSideDrawerComponent;
    public drawer: SideDrawerType;    

  ngOnInit() {
    
  }

  ngAfterViewInit() {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();


        this.service.list("1")//???
        .subscribe(list => {      
          list.forEach( item => this.list.unshift(item));
        });
    }

    public openDrawer() {      
        this.drawer.toggleDrawerState();
    }
}
