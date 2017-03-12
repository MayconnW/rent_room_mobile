import { Component, ElementRef, OnInit, ViewChild } from "@angular/core";
import { Page } from "ui/page";
import { View } from "ui/core/view";

@Component({
	moduleId: module.id,
  selector: "initial",
  templateUrl: "initial-page.html",
  styleUrls: ["initial-page-common.css"]  
})
export class InitialComponent{ 
  @ViewChild("container") container: ElementRef;
  constructor(private page: Page){

  }
}
