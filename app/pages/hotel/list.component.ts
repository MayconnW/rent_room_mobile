import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Hotel } from "../../shared/hotel/hotel";
import { HotelService } from "../../shared/hotel/hotel.service";

@Component({
	moduleId: module.id,
  selector: "list",
  templateUrl: "list.html",
  styleUrls: ["list-common.css", "list.css"],
  providers: [HotelService]
})
export class ListComponent implements OnInit {
  hotelList: Array<Hotel> = [];

  constructor(private hotelService: HotelService) {}

  ngOnInit() {
    this.hotelService.list()
    .subscribe(listOfHotels => {      
      listOfHotels.forEach( hotel => this.hotelList.unshift(hotel));
    });
  }
}