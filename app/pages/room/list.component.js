"use strict";
var core_1 = require("@angular/core");
var room_service_1 = require("../../shared/room/room.service");
var config_1 = require("../../shared/config");
var angular_1 = require("nativescript-telerik-ui/sidedrawer/angular");
var ListComponent = (function () {
    function ListComponent(service, _changeDetectionRef) {
        this.service = service;
        this._changeDetectionRef = _changeDetectionRef;
        this.list = [];
        this.userApi = config_1.Config.userApi;
        this.itemsTopMenu = [
            {
                name: "Home",
                icon: "ic_home_black_24dp"
            },
            {
                name: "Clients",
                icon: "ic_people_black_24dp"
            },
            {
                name: "Hotels",
                icon: "ic_domain_black_24dp"
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
    }
    ListComponent.prototype.ngOnInit = function () {
    };
    ListComponent.prototype.ngAfterViewInit = function () {
        var _this = this;
        this.drawer = this.drawerComponent.sideDrawer;
        this._changeDetectionRef.detectChanges();
        this.service.list("1") //???
            .subscribe(function (list) {
            list.forEach(function (item) { return _this.list.unshift(item); });
        });
    };
    ListComponent.prototype.openDrawer = function () {
        this.drawer.toggleDrawerState();
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild(angular_1.RadSideDrawerComponent),
    __metadata("design:type", angular_1.RadSideDrawerComponent)
], ListComponent.prototype, "drawerComponent", void 0);
ListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list",
        templateUrl: "list.html",
        styleUrls: ["list-common.css", "list.css"],
        providers: [room_service_1.RoomService]
    }),
    __metadata("design:paramtypes", [room_service_1.RoomService,
        core_1.ChangeDetectorRef])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXdHO0FBRXhHLCtEQUE2RDtBQUM3RCw4Q0FBNkM7QUFFN0Msc0VBQW9HO0FBU3BHLElBQWEsYUFBYTtJQVN4Qix1QkFBb0IsT0FBb0IsRUFDcEIsbUJBQXNDO1FBRHRDLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsd0JBQW1CLEdBQW5CLG1CQUFtQixDQUFtQjtRQU4xRCxTQUFJLEdBQWdCLEVBQUUsQ0FBQztRQUd2QixZQUFPLEdBQUcsZUFBTSxDQUFDLE9BQU8sQ0FBQztRQUl2QixJQUFJLENBQUMsWUFBWSxHQUFHO1lBQ1o7Z0JBQ0UsSUFBSSxFQUFDLE1BQU07Z0JBQ1gsSUFBSSxFQUFFLG9CQUFvQjthQUMzQjtZQUNEO2dCQUNFLElBQUksRUFBQyxTQUFTO2dCQUNkLElBQUksRUFBRSxzQkFBc0I7YUFBQztZQUMvQjtnQkFDRSxJQUFJLEVBQUMsUUFBUTtnQkFDYixJQUFJLEVBQUUsc0JBQXNCO2FBQzdCO1NBQ0osQ0FBQztRQUVOLElBQUksQ0FBQyxlQUFlLEdBQUc7WUFDZjtnQkFDRSxJQUFJLEVBQUMsT0FBTztnQkFDWixJQUFJLEVBQUUseUJBQXlCO2FBQUM7WUFDbEM7Z0JBQ0UsSUFBSSxFQUFDLE1BQU07Z0JBQ1gsSUFBSSxFQUFFLHNCQUFzQjthQUFDO1NBQ2xDLENBQUM7SUFDUixDQUFDO0lBTUQsZ0NBQVEsR0FBUjtJQUVBLENBQUM7SUFFRCx1Q0FBZSxHQUFmO1FBQUEsaUJBU0c7UUFSRyxJQUFJLENBQUMsTUFBTSxHQUFHLElBQUksQ0FBQyxlQUFlLENBQUMsVUFBVSxDQUFDO1FBQzlDLElBQUksQ0FBQyxtQkFBbUIsQ0FBQyxhQUFhLEVBQUUsQ0FBQztRQUd6QyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxLQUFLO2FBQzFCLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDYixJQUFJLENBQUMsT0FBTyxDQUFFLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNQLENBQUM7SUFFTSxrQ0FBVSxHQUFqQjtRQUNJLElBQUksQ0FBQyxNQUFNLENBQUMsaUJBQWlCLEVBQUUsQ0FBQztJQUNwQyxDQUFDO0lBQ0wsb0JBQUM7QUFBRCxDQUFDLEFBekRELElBeURDO0FBckJHO0lBREQsZ0JBQVMsQ0FBQyxnQ0FBc0IsQ0FBQzs4QkFDUixnQ0FBc0I7c0RBQUM7QUFwQ3RDLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNsQixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsV0FBVztRQUN4QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUM7UUFDMUMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztLQUN6QixDQUFDO3FDQVU2QiwwQkFBVztRQUNDLHdCQUFpQjtHQVYvQyxhQUFhLENBeUR6QjtBQXpEWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgT25Jbml0LCBWaWV3Q2hpbGQsIENoYW5nZURldGVjdG9yUmVmIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Jvb20vcm9vbVwiO1xuaW1wb3J0IHsgUm9vbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBDb25maWcgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2NvbmZpZ1wiO1xuXG5pbXBvcnQgeyBSYWRTaWRlRHJhd2VyQ29tcG9uZW50LCBTaWRlRHJhd2VyVHlwZSB9IGZyb20gXCJuYXRpdmVzY3JpcHQtdGVsZXJpay11aS9zaWRlZHJhd2VyL2FuZ3VsYXJcIjsgIFxuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCJsaXN0Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJsaXN0LWNvbW1vbi5jc3NcIiwgXCJsaXN0LmNzc1wiXSxcbiAgcHJvdmlkZXJzOiBbUm9vbVNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQgeyAgXG5cbiAgaXRlbXNUb3BNZW51OkFycmF5PE9iamVjdD47XG4gIGl0ZW1zQm90dG9tTWVudTpBcnJheTxPYmplY3Q+O1xuICBsaXN0OiBBcnJheTxSb29tPiA9IFtdOyAgXG4gIGk6IG51bWJlcjtcblxuICB1c2VyQXBpID0gQ29uZmlnLnVzZXJBcGk7XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBSb29tU2VydmljZSwgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBwcml2YXRlIF9jaGFuZ2VEZXRlY3Rpb25SZWY6IENoYW5nZURldGVjdG9yUmVmKSB7ICAgICAgIFxuICAgIHRoaXMuaXRlbXNUb3BNZW51ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOlwiSG9tZVwiLFxuICAgICAgICAgICAgICBpY29uOiBcImljX2hvbWVfYmxhY2tfMjRkcFwiXG4gICAgICAgICAgICB9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOlwiQ2xpZW50c1wiLFxuICAgICAgICAgICAgICBpY29uOiBcImljX3Blb3BsZV9ibGFja18yNGRwXCJ9LFxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOlwiSG90ZWxzXCIsXG4gICAgICAgICAgICAgIGljb246IFwiaWNfZG9tYWluX2JsYWNrXzI0ZHBcIlxuICAgICAgICAgICAgfVxuICAgICAgICBdOyBcblxuICAgIHRoaXMuaXRlbXNCb3R0b21NZW51ID0gW1xuICAgICAgICAgICAge1xuICAgICAgICAgICAgICBuYW1lOlwiQWJvdXRcIixcbiAgICAgICAgICAgICAgaWNvbjogXCJpY19saXZlX2hlbHBfYmxhY2tfMjRkcFwifSxcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgbmFtZTpcIlNhaXJcIixcbiAgICAgICAgICAgICAgaWNvbjogXCJpY19jYW5jZWxfYmxhY2tfMjRkcFwifVxuICAgICAgICBdOyBcbiAgfVxuXG4gIEBWaWV3Q2hpbGQoUmFkU2lkZURyYXdlckNvbXBvbmVudCkgXG4gICAgcHVibGljIGRyYXdlckNvbXBvbmVudDogUmFkU2lkZURyYXdlckNvbXBvbmVudDtcbiAgICBwdWJsaWMgZHJhd2VyOiBTaWRlRHJhd2VyVHlwZTsgICAgXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgXG4gIH1cblxuICBuZ0FmdGVyVmlld0luaXQoKSB7XG4gICAgICAgIHRoaXMuZHJhd2VyID0gdGhpcy5kcmF3ZXJDb21wb25lbnQuc2lkZURyYXdlcjtcbiAgICAgICAgdGhpcy5fY2hhbmdlRGV0ZWN0aW9uUmVmLmRldGVjdENoYW5nZXMoKTtcblxuXG4gICAgICAgIHRoaXMuc2VydmljZS5saXN0KFwiMVwiKS8vPz8/XG4gICAgICAgIC5zdWJzY3JpYmUobGlzdCA9PiB7ICAgICAgXG4gICAgICAgICAgbGlzdC5mb3JFYWNoKCBpdGVtID0+IHRoaXMubGlzdC51bnNoaWZ0KGl0ZW0pKTtcbiAgICAgICAgfSk7XG4gICAgfVxuXG4gICAgcHVibGljIG9wZW5EcmF3ZXIoKSB7ICAgICAgXG4gICAgICAgIHRoaXMuZHJhd2VyLnRvZ2dsZURyYXdlclN0YXRlKCk7XG4gICAgfVxufVxuIl19