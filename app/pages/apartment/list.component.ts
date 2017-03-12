import { Component, ElementRef, OnInit } from "@angular/core";
import { Apartment } from "../../shared/apartment/apartment";
import { ApartmentService } from "../../shared/apartment/apartment.service";

import { Router, ActivatedRoute, Params  } from "@angular/router";
import "rxjs/add/operator/switchMap";

@Component({
	moduleId: module.id,
  selector: "list",
  templateUrl: "list.html",
  styleUrls: ["list-common.css", "list.css"],
  providers: [ApartmentService]
})
export class ListComponent implements OnInit {
  list: Array<Apartment> = [];  

  constructor(private service: ApartmentService,
              private route: ActivatedRoute,
              private router: Router) {  
  }

  ngOnInit() {
    let id:string = this.route.snapshot.params['hotel_id'];
    this.service.list(id)
      .subscribe(list => {      
        list.forEach( item => this.list.unshift(item));
      }) 
  }
  
  listRooms(apartmentId: number){    
    let p:String = apartmentId.toString();
    this.router.navigate(["/rooms",p]);
  }

}