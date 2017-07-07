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
  roomList: Array<Room> = [];

  constructor(private roomService: RoomService) {}

  ngOnInit() {
    this.roomService.list("2")
    .subscribe(listOfRooms => {      
      listOfRooms.forEach( room => this.roomList.unshift(room));
    });
  }
}