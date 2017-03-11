import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Room } from "../../shared/room/room";
import { RoomService } from "../../shared/room/room.service";

@Component({
	moduleId: module.id,
  selector: "list",
  templateUrl: "list.html",
  styleUrls: ["list-common.css", "list.css"],
  providers: [RoomService]
})
export class ListComponent implements OnInit {
  list: Array<Room> = [];

  constructor(private service: RoomService) {}

  ngOnInit() {
    this.service.list("1")//???
    .subscribe(list => {      
      list.forEach( item => this.list.unshift(item));
    });
  }
}