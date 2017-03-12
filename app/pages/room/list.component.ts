import { Component, ElementRef, Injectable, OnInit } from "@angular/core";
import { Room } from "../../shared/room/room";
import { RoomService } from "../../shared/room/room.service";
import { Router, ActivatedRoute, Params  } from "@angular/router";
import "rxjs/add/operator/switchMap";

@Component({
	moduleId: module.id,
  selector: "list",
  templateUrl: "list.html",
  styleUrls: ["list-common.css", "list.css"],
  providers: [RoomService]
})
export class ListComponent implements OnInit {  
  list: Array<Room> = [];  

  constructor(private service: RoomService,                            
              private route: ActivatedRoute,
              private router: Router) {           
  } 

  ngOnInit() {
    let id:string = this.route.snapshot.params['apartment_id'];
    this.service.list(id)
      .subscribe(list => {      
        list.forEach( item => this.list.unshift(item));
      }) 
  }
    
}


