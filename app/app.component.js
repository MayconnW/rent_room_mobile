"use strict";
var core_1 = require("@angular/core");
var config_1 = require("./shared/config");
var router_1 = require("@angular/router");
//import {ROUTER_DIRECTIVES} from '@angular/router';  
//import {NS_ROUTER_DIRECTIVES} from 'nativescript-angular/router';
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var AppComponent = (function () {
    function AppComponent(_changeDetectionRef, router) {
        this._changeDetectionRef = _changeDetectionRef;
        this.router = router;
        this.userApi = config_1.Config.userApi;
        this.router = router;
    }
    AppComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.itemsTopMenu = [
            {
                name: "Home",
                icon: "ic_home_black_24dp",
                path: "/initial"
            },
            {
                name: "Clients",
                icon: "ic_people_black_24dp",
                path: "/clients"
            },
            {
                name: "Hotels",
                icon: "ic_domain_black_24dp",
                path: "/hotels"
            }
        ];
        this.itemsBottomMenu = [
            {
                name: "About",
                icon: "ic_live_help_black_24dp"
            },
            {
                name: "Sair",
                icon: "ic_cancel_black_24dp"
            }
        ];
        this.router.events.subscribe(function (event) {
            _this.drawer.closeDrawer();
        });
    };
    AppComponent.prototype.ngAfterViewInit = function () {
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
    };
    AppComponent.prototype.openDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    return AppComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], AppComponent.prototype, "drawerComponent", void 0);
AppComponent = __decorate([
    core_1.Component({
        selector: "main",
        //template: "<page-router-outlet></page-router-outlet>"
        templateUrl: "./pages/initial/initial.html",
        styleUrls: ["./pages/initial/initial-common.css"]
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RztBQUN6RywwQ0FBeUM7QUFDekMsMENBQXlDO0FBT3pDLHNEQUFzRDtBQUN0RCxtRUFBbUU7QUFJbkUsc0VBQW9HO0FBU3BHLElBQWEsWUFBWTtJQU92QixzQkFBb0IsbUJBQXNDLEVBQ3RDLE1BQWM7UUFEZCx3QkFBbUIsR0FBbkIsbUJBQW1CLENBQW1CO1FBQ3RDLFdBQU0sR0FBTixNQUFNLENBQVE7UUFIbEMsWUFBTyxHQUFHLGVBQU0sQ0FBQyxPQUFPLENBQUM7UUFJdkIsSUFBSSxDQUFDLE1BQU0sR0FBRyxNQUFNLENBQUM7SUFDdkIsQ0FBQztJQU1ELCtCQUFRLEdBQVI7UUFBQSxpQkFnQ0M7UUE5QkMsSUFBSSxDQUFDLFlBQVksR0FBRztZQUNaO2dCQUNFLElBQUksRUFBQyxNQUFNO2dCQUNYLElBQUksRUFBRSxvQkFBb0I7Z0JBQzFCLElBQUksRUFBRSxVQUFVO2FBQ2pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFDLFNBQVM7Z0JBQ2QsSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsSUFBSSxFQUFFLFVBQVU7YUFDakI7WUFDRDtnQkFDRSxJQUFJLEVBQUMsUUFBUTtnQkFDYixJQUFJLEVBQUUsc0JBQXNCO2dCQUM1QixJQUFJLEVBQUUsU0FBUzthQUNoQjtTQUNKLENBQUM7UUFFTixJQUFJLENBQUMsZUFBZSxHQUFHO1lBQ2Y7Z0JBQ0UsSUFBSSxFQUFDLE9BQU87Z0JBQ1osSUFBSSxFQUFFLHlCQUF5QjthQUFDO1lBQ2xDO2dCQUNFLElBQUksRUFBQyxNQUFNO2dCQUNYLElBQUksRUFBRSxzQkFBc0I7YUFBQztTQUNsQyxDQUFDO1FBRU4sSUFBSSxDQUFDLE1BQU0sQ0FBQyxNQUFNLENBQUMsU0FBUyxDQUFDLFVBQUMsS0FBSztZQUMzQixLQUFJLENBQUMsTUFBTSxDQUFDLFdBQVcsRUFBRSxDQUFDO1FBQzlCLENBQUMsQ0FBQyxDQUFDO0lBQ1QsQ0FBQztJQUVELHNDQUFlLEdBQWY7UUFDRSxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztJQUMzQyxDQUFDO0lBRU0saUNBQVUsR0FBakI7UUFDRSxJQUFJLENBQUMsTUFBTSxDQUFDLGlCQUFpQixFQUFFLENBQUM7SUFDbEMsQ0FBQztJQUVILG1CQUFDO0FBQUQsQ0FBQyxBQTNERCxJQTJEQztBQTlDRztJQURELGdCQUFTLENBQUMsZ0NBQXNCLENBQUM7OEJBQ1IsZ0NBQXNCO3FEQUFDO0FBYnRDLFlBQVk7SUFQeEIsZ0JBQVMsQ0FBQztRQUNULFFBQVEsRUFBRSxNQUFNO1FBQ2hCLHVEQUF1RDtRQUN2RCxXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO0tBQ2xELENBQUM7cUNBU3lDLHdCQUFpQjtRQUM5QixlQUFNO0dBUnZCLFlBQVksQ0EyRHhCO0FBM0RZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBPbkluaXQsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL3NoYXJlZC9jb25maWdcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuXG5cblxuXG5cbi8vaW1wb3J0IHtST1VURVJfRElSRUNUSVZFU30gZnJvbSAnQGFuZ3VsYXIvcm91dGVyJzsgIFxuLy9pbXBvcnQge05TX1JPVVRFUl9ESVJFQ1RJVkVTfSBmcm9tICduYXRpdmVzY3JpcHQtYW5ndWxhci9yb3V0ZXInO1xuXG5cblxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7ICBcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1haW5cIiwgIFxuICAvL3RlbXBsYXRlOiBcIjxwYWdlLXJvdXRlci1vdXRsZXQ+PC9wYWdlLXJvdXRlci1vdXRsZXQ+XCJcbiAgdGVtcGxhdGVVcmw6IFwiLi9wYWdlcy9pbml0aWFsL2luaXRpYWwuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcIi4vcGFnZXMvaW5pdGlhbC9pbml0aWFsLWNvbW1vbi5jc3NcIl0gIFxufSlcblxuZXhwb3J0IGNsYXNzIEFwcENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGl0ZW1zVG9wTWVudTpBcnJheTxPYmplY3Q+O1xuICBpdGVtc0JvdHRvbU1lbnU6QXJyYXk8T2JqZWN0PjtcbiAgaTogbnVtYmVyO1xuXG4gIHVzZXJBcGkgPSBDb25maWcudXNlckFwaTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmLCBcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyAgICAgIFxuICAgIHRoaXMucm91dGVyID0gcm91dGVyOyAgICBcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgXG4gICAgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBwcml2YXRlIGRyYXdlcjogU2lkZURyYXdlclR5cGU7ICAgIFxuXG4gIG5nT25Jbml0KCkge1xuXG4gICAgdGhpcy5pdGVtc1RvcE1lbnUgPSBbXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6XCJIb21lXCIsXG4gICAgICAgICAgICAgIGljb246IFwiaWNfaG9tZV9ibGFja18yNGRwXCIsXG4gICAgICAgICAgICAgIHBhdGg6IFwiL2luaXRpYWxcIlxuICAgICAgICAgICAgfSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTpcIkNsaWVudHNcIixcbiAgICAgICAgICAgICAgaWNvbjogXCJpY19wZW9wbGVfYmxhY2tfMjRkcFwiLFxuICAgICAgICAgICAgICBwYXRoOiBcIi9jbGllbnRzXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6XCJIb3RlbHNcIixcbiAgICAgICAgICAgICAgaWNvbjogXCJpY19kb21haW5fYmxhY2tfMjRkcFwiLFxuICAgICAgICAgICAgICBwYXRoOiBcIi9ob3RlbHNcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdOyBcblxuICAgIHRoaXMuaXRlbXNCb3R0b21NZW51ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOlwiQWJvdXRcIixcbiAgICAgICAgICAgICAgaWNvbjogXCJpY19saXZlX2hlbHBfYmxhY2tfMjRkcFwifSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTpcIlNhaXJcIixcbiAgICAgICAgICAgICAgaWNvbjogXCJpY19jYW5jZWxfYmxhY2tfMjRkcFwifVxuICAgICAgICBdOyBcblxuICAgIHRoaXMucm91dGVyLmV2ZW50cy5zdWJzY3JpYmUoKGV2ZW50KSA9PiB7XG4gICAgICAgICAgICB0aGlzLmRyYXdlci5jbG9zZURyYXdlcigpO1xuICAgICAgICB9KTtcbiAgfVxuXG4gIG5nQWZ0ZXJWaWV3SW5pdCgpIHtcbiAgICB0aGlzLmRyYXdlciA9IHRoaXMuZHJhd2VyQ29tcG9uZW50LnNpZGVEcmF3ZXI7XG4gICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTsgICAgICAgIFxuICB9XG5cbiAgcHVibGljIG9wZW5EcmF3ZXIoKSB7ICAgICAgXG4gICAgdGhpcy5kcmF3ZXIudG9nZ2xlRHJhd2VyU3RhdGUoKTtcbiAgfSAgXG5cbn1cbiJdfQ==