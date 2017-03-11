import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Client } from "../../shared/client/client";
import { ClientService } from "../../shared/client/client.service";

@Component({
	moduleId: module.id,
  selector: "list",
  templateUrl: "list.html",
  styleUrls: ["list-common.css", "list.css"],
  providers: [ClientService]
})
export class ListComponent implements OnInit {
  clientList: Array<Client> = [];

  constructor(private clientService: ClientService) {}

  ngOnInit() {
    this.clientService.list()
    .subscribe(listOfClients => {      
      listOfClients.forEach( client => this.clientList.unshift(client));
    });
  }
}