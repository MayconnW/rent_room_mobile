"use strict";
var core_1 = require("@angular/core");
var config_1 = require("./shared/config");
var router_1 = require("@angular/router");
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
        templateUrl: "./pages/initial/initial.html",
        styleUrls: ["./pages/initial/initial-common.css"]
    }),
    __metadata("design:paramtypes", [core_1.ChangeDetectorRef,
        router_1.Router])
], AppComponent);
exports.AppComponent = AppComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiYXBwLmNvbXBvbmVudC5qcyIsInNvdXJjZVJvb3QiOiIiLCJzb3VyY2VzIjpbImFwcC5jb21wb25lbnQudHMiXSwibmFtZXMiOltdLCJtYXBwaW5ncyI6IjtBQUFBLHNDQUF5RztBQUN6RywwQ0FBeUM7QUFDekMsMENBQXlDO0FBRXpDLHNFQUFvRztBQVFwRyxJQUFhLFlBQVk7SUFPdkIsc0JBQW9CLG1CQUFzQyxFQUN0QyxNQUFjO1FBRGQsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQUN0QyxXQUFNLEdBQU4sTUFBTSxDQUFRO1FBSGxDLFlBQU8sR0FBRyxlQUFNLENBQUMsT0FBTyxDQUFDO1FBSXZCLElBQUksQ0FBQyxNQUFNLEdBQUcsTUFBTSxDQUFDO0lBQ3ZCLENBQUM7SUFNRCwrQkFBUSxHQUFSO1FBQUEsaUJBZ0NDO1FBOUJDLElBQUksQ0FBQyxZQUFZLEdBQUc7WUFDWjtnQkFDRSxJQUFJLEVBQUMsTUFBTTtnQkFDWCxJQUFJLEVBQUUsb0JBQW9CO2dCQUMxQixJQUFJLEVBQUUsVUFBVTthQUNqQjtZQUNEO2dCQUNFLElBQUksRUFBQyxTQUFTO2dCQUNkLElBQUksRUFBRSxzQkFBc0I7Z0JBQzVCLElBQUksRUFBRSxVQUFVO2FBQ2pCO1lBQ0Q7Z0JBQ0UsSUFBSSxFQUFDLFFBQVE7Z0JBQ2IsSUFBSSxFQUFFLHNCQUFzQjtnQkFDNUIsSUFBSSxFQUFFLFNBQVM7YUFDaEI7U0FDSixDQUFDO1FBRU4sSUFBSSxDQUFDLGVBQWUsR0FBRztZQUNmO2dCQUNFLElBQUksRUFBQyxPQUFPO2dCQUNaLElBQUksRUFBRSx5QkFBeUI7YUFBQztZQUNsQztnQkFDRSxJQUFJLEVBQUMsTUFBTTtnQkFDWCxJQUFJLEVBQUUsc0JBQXNCO2FBQUM7U0FDbEMsQ0FBQztRQUVOLElBQUksQ0FBQyxNQUFNLENBQUMsTUFBTSxDQUFDLFNBQVMsQ0FBQyxVQUFDLEtBQUs7WUFDM0IsS0FBSSxDQUFDLE1BQU0sQ0FBQyxXQUFXLEVBQUUsQ0FBQztRQUM5QixDQUFDLENBQUMsQ0FBQztJQUNULENBQUM7SUFFRCxzQ0FBZSxHQUFmO1FBQ0UsSUFBSSxDQUFDLE1BQU0sR0FBRyxJQUFJLENBQUMsZUFBZSxDQUFDLFVBQVUsQ0FBQztRQUM5QyxJQUFJLENBQUMsbUJBQW1CLENBQUMsYUFBYSxFQUFFLENBQUM7SUFDM0MsQ0FBQztJQUVNLGlDQUFVLEdBQWpCO1FBQ0UsSUFBSSxDQUFDLE1BQU0sQ0FBQyxpQkFBaUIsRUFBRSxDQUFDO0lBQ2xDLENBQUM7SUFFSCxtQkFBQztBQUFELENBQUMsQUEzREQsSUEyREM7QUE5Q0c7SUFERCxnQkFBUyxDQUFDLGdDQUFzQixDQUFDOzhCQUNSLGdDQUFzQjtxREFBQztBQWJ0QyxZQUFZO0lBTnhCLGdCQUFTLENBQUM7UUFDVCxRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsOEJBQThCO1FBQzNDLFNBQVMsRUFBRSxDQUFDLG9DQUFvQyxDQUFDO0tBQ2xELENBQUM7cUNBU3lDLHdCQUFpQjtRQUM5QixlQUFNO0dBUnZCLFlBQVksQ0EyRHhCO0FBM0RZLG9DQUFZIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBJbmplY3RhYmxlLCBPbkluaXQsIFZpZXdDaGlsZCwgQ2hhbmdlRGV0ZWN0b3JSZWYgIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IENvbmZpZyB9IGZyb20gXCIuL3NoYXJlZC9jb25maWdcIjtcbmltcG9ydCB7IFJvdXRlciB9IGZyb20gXCJAYW5ndWxhci9yb3V0ZXJcIjtcblxuaW1wb3J0IHsgUmFkU2lkZURyYXdlckNvbXBvbmVudCwgU2lkZURyYXdlclR5cGUgfSBmcm9tIFwibmF0aXZlc2NyaXB0LXRlbGVyaWstdWkvc2lkZWRyYXdlci9hbmd1bGFyXCI7ICBcblxuQENvbXBvbmVudCh7XG4gIHNlbGVjdG9yOiBcIm1haW5cIiwgICAgXG4gIHRlbXBsYXRlVXJsOiBcIi4vcGFnZXMvaW5pdGlhbC9pbml0aWFsLmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCIuL3BhZ2VzL2luaXRpYWwvaW5pdGlhbC1jb21tb24uY3NzXCJdICBcbn0pXG5cbmV4cG9ydCBjbGFzcyBBcHBDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBpdGVtc1RvcE1lbnU6QXJyYXk8T2JqZWN0PjtcbiAgaXRlbXNCb3R0b21NZW51OkFycmF5PE9iamVjdD47XG4gIGk6IG51bWJlcjtcblxuICB1c2VyQXBpID0gQ29uZmlnLnVzZXJBcGk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBfY2hhbmdlRGV0ZWN0aW9uUmVmOiBDaGFuZ2VEZXRlY3RvclJlZiwgXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGVyOiBSb3V0ZXIpIHsgICAgICBcbiAgICB0aGlzLnJvdXRlciA9IHJvdXRlcjsgICAgXG4gIH1cblxuICBAVmlld0NoaWxkKFJhZFNpZGVEcmF3ZXJDb21wb25lbnQpIFxuICAgIHB1YmxpYyBkcmF3ZXJDb21wb25lbnQ6IFJhZFNpZGVEcmF3ZXJDb21wb25lbnQ7XG4gICAgcHJpdmF0ZSBkcmF3ZXI6IFNpZGVEcmF3ZXJUeXBlOyAgICBcblxuICBuZ09uSW5pdCgpIHtcblxuICAgIHRoaXMuaXRlbXNUb3BNZW51ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOlwiSG9tZVwiLFxuICAgICAgICAgICAgICBpY29uOiBcImljX2hvbWVfYmxhY2tfMjRkcFwiLFxuICAgICAgICAgICAgICBwYXRoOiBcIi9pbml0aWFsXCJcbiAgICAgICAgICAgIH0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6XCJDbGllbnRzXCIsXG4gICAgICAgICAgICAgIGljb246IFwiaWNfcGVvcGxlX2JsYWNrXzI0ZHBcIixcbiAgICAgICAgICAgICAgcGF0aDogXCIvY2xpZW50c1wiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOlwiSG90ZWxzXCIsXG4gICAgICAgICAgICAgIGljb246IFwiaWNfZG9tYWluX2JsYWNrXzI0ZHBcIixcbiAgICAgICAgICAgICAgcGF0aDogXCIvaG90ZWxzXCJcbiAgICAgICAgICAgIH1cbiAgICAgICAgXTsgXG5cbiAgICB0aGlzLml0ZW1zQm90dG9tTWVudSA9IFtcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTpcIkFib3V0XCIsXG4gICAgICAgICAgICAgIGljb246IFwiaWNfbGl2ZV9oZWxwX2JsYWNrXzI0ZHBcIn0sXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgIG5hbWU6XCJTYWlyXCIsXG4gICAgICAgICAgICAgIGljb246IFwiaWNfY2FuY2VsX2JsYWNrXzI0ZHBcIn1cbiAgICAgICAgXTsgXG5cbiAgICB0aGlzLnJvdXRlci5ldmVudHMuc3Vic2NyaWJlKChldmVudCkgPT4ge1xuICAgICAgICAgICAgdGhpcy5kcmF3ZXIuY2xvc2VEcmF3ZXIoKTtcbiAgICAgICAgfSk7XG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgdGhpcy5kcmF3ZXIgPSB0aGlzLmRyYXdlckNvbXBvbmVudC5zaWRlRHJhd2VyO1xuICAgIHRoaXMuX2NoYW5nZURldGVjdGlvblJlZi5kZXRlY3RDaGFuZ2VzKCk7ICAgICAgICBcbiAgfVxuXG4gIHB1YmxpYyBvcGVuRHJhd2VyKCkgeyAgICAgIFxuICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gIH0gIFxuXG59XG4iXX0=