"use strict";
var core_1 = require("@angular/core");
var hotel_service_1 = require("../../shared/hotel/hotel.service");
var router_1 = require("@angular/router");
var ListComponent = (function () {
    function ListComponent(hotelService, router) {
        this.hotelService = hotelService;
        this.router = router;
        this.hotelList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hotelService.list()
            .subscribe(function (listOfHotels) {
            listOfHotels.forEach(function (hotel) { return _this.hotelList.unshift(hotel); });
        });
    };
    ListComponent.prototype.listApartments = function (hotelId) {
        var p = hotelId.toString();
        this.router.navigate(["/apartments", p]);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list",
        templateUrl: "list.html",
        styleUrls: ["list-common.css", "list.css"],
        providers: [hotel_service_1.HotelService]
    }),
    __metadata("design:paramtypes", [hotel_service_1.HotelService,
        router_1.Router])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBRXpFLGtFQUFnRTtBQUNoRSwwQ0FBeUM7QUFTekMsSUFBYSxhQUFhO0lBR3hCLHVCQUFvQixZQUEwQixFQUMxQixNQUFjO1FBRGQsaUJBQVksR0FBWixZQUFZLENBQWM7UUFDMUIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUhsQyxjQUFTLEdBQWlCLEVBQUUsQ0FBQztJQUdRLENBQUM7SUFFdEMsZ0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUU7YUFDdkIsU0FBUyxDQUFDLFVBQUEsWUFBWTtZQUNyQixZQUFZLENBQUMsT0FBTyxDQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFFRCxzQ0FBYyxHQUFkLFVBQWUsT0FBZTtRQUM1QixJQUFJLENBQUMsR0FBVSxPQUFPLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDbEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxhQUFhLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUMxQyxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBbEJELElBa0JDO0FBbEJZLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNsQixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsV0FBVztRQUN4QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUM7UUFDMUMsU0FBUyxFQUFFLENBQUMsNEJBQVksQ0FBQztLQUMxQixDQUFDO3FDQUlrQyw0QkFBWTtRQUNsQixlQUFNO0dBSnZCLGFBQWEsQ0FrQnpCO0FBbEJZLHNDQUFhIiwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgQ29tcG9uZW50LCBFbGVtZW50UmVmLCBPbkluaXQsIFZpZXdDaGlsZCB9IGZyb20gXCJAYW5ndWxhci9jb3JlXCI7XG5pbXBvcnQgeyBIb3RlbCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvaG90ZWwvaG90ZWxcIjtcbmltcG9ydCB7IEhvdGVsU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvaG90ZWwvaG90ZWwuc2VydmljZVwiO1xuaW1wb3J0IHsgUm91dGVyIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuXG5AQ29tcG9uZW50KHtcblx0bW9kdWxlSWQ6IG1vZHVsZS5pZCxcbiAgc2VsZWN0b3I6IFwibGlzdFwiLFxuICB0ZW1wbGF0ZVVybDogXCJsaXN0Lmh0bWxcIixcbiAgc3R5bGVVcmxzOiBbXCJsaXN0LWNvbW1vbi5jc3NcIiwgXCJsaXN0LmNzc1wiXSxcbiAgcHJvdmlkZXJzOiBbSG90ZWxTZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgaG90ZWxMaXN0OiBBcnJheTxIb3RlbD4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIGhvdGVsU2VydmljZTogSG90ZWxTZXJ2aWNlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuaG90ZWxTZXJ2aWNlLmxpc3QoKVxuICAgIC5zdWJzY3JpYmUobGlzdE9mSG90ZWxzID0+IHsgICAgICBcbiAgICAgIGxpc3RPZkhvdGVscy5mb3JFYWNoKCBob3RlbCA9PiB0aGlzLmhvdGVsTGlzdC51bnNoaWZ0KGhvdGVsKSk7XG4gICAgfSk7XG4gIH1cblxuICBsaXN0QXBhcnRtZW50cyhob3RlbElkOiBudW1iZXIpeyAgICBcbiAgICBsZXQgcDpTdHJpbmcgPSBob3RlbElkLnRvU3RyaW5nKCk7XG4gICAgdGhpcy5yb3V0ZXIubmF2aWdhdGUoW1wiL2FwYXJ0bWVudHNcIixwXSk7XG4gIH1cblxufSJdfQ==