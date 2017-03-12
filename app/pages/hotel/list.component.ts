import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Hotel } from "../../shared/hotel/hotel";
import { HotelService } from "../../shared/hotel/hotel.service";
import { Router } from "@angular/router";

@Component({
	moduleId: module.id,
  selector: "list",
  templateUrl: "list.html",
  styleUrls: ["list-common.css", "list.css"],
  providers: [HotelService]
})
export class ListComponent implements OnInit {
  hotelList: Array<Hotel> = [];

  constructor(private hotelService: HotelService,
              private router: Router) {}

  ngOnInit() {
    this.hotelService.list()
    .subscribe(listOfHotels => {      
      listOfHotels.forEach( hotel => this.hotelList.unshift(hotel));
    });
  }

  listApartments(hotelId: number){    
    let p:String = hotelId.toString();
    this.router.navigate(["/apartments",p]);
  }

}