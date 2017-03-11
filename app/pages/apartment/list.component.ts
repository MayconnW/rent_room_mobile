import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Apartment } from "../../shared/apartment/apartment";
import { ApartmentService } from "../../shared/apartment/apartment.service";

@Component({
	moduleId: module.id,
  selector: "list",
  templateUrl: "list.html",
  styleUrls: ["list-common.css", "list.css"],
  providers: [ApartmentService]
})
export class ListComponent implements OnInit {
  list: Array<Apartment> = [];

  constructor(private service: ApartmentService) {}

  ngOnInit() {
    this.service.list("1")//???
    .subscribe(list => {      
      list.forEach( item => this.list.unshift(item));
    });
  }
}