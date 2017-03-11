import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Room } from "../../shared/room/room";
import { RoomService } from "../../shared/room/room.service";

import { TnsSideDrawer } from 'nativescript-sidedrawer'

@Component({
	moduleId: module.id,
  selector: "list",
  templateUrl: "list.html",
  styleUrls: ["list-common.css", "list.css"],
  providers: [RoomService]
})
export class ListComponent implements OnInit {
  list: Array<Room> = [];  
  i: number;

  constructor(private service: RoomService) {

    TnsSideDrawer.build({
      templates: [{
          title: 'Home',
          androidIcon: 'ic_home_white_24dp',
          iosIcon: 'ic_home_white',
      }],
      title: 'This App Name',
      subtitle: 'is just as awesome as this subtitle!',
      listener: (index) => {
          this.i = index
      },
      context: this,
    })

  }

  ngOnInit() {



    this.service.list("1")//???
    .subscribe(list => {      
      list.forEach( item => this.list.unshift(item));
    });
  }
}
