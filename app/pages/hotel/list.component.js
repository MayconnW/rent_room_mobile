"use strict";
var core_1 = require("@angular/core");
var hotel_service_1 = require("../../shared/hotel/hotel.service");
var ListComponent = (function () {
    function ListComponent(hotelService) {
        this.hotelService = hotelService;
        this.hotelList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.hotelService.list()
            .subscribe(function (listOfHotels) {
            listOfHotels.forEach(function (hotel) { return _this.hotelList.unshift(hotel); });
        });
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
    __metadata("design:paramtypes", [hotel_service_1.HotelService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBRXpFLGtFQUFnRTtBQVNoRSxJQUFhLGFBQWE7SUFHeEIsdUJBQW9CLFlBQTBCO1FBQTFCLGlCQUFZLEdBQVosWUFBWSxDQUFjO1FBRjlDLGNBQVMsR0FBaUIsRUFBRSxDQUFDO0lBRW9CLENBQUM7SUFFbEQsZ0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFlBQVksQ0FBQyxJQUFJLEVBQUU7YUFDdkIsU0FBUyxDQUFDLFVBQUEsWUFBWTtZQUNyQixZQUFZLENBQUMsT0FBTyxDQUFFLFVBQUEsS0FBSyxJQUFJLE9BQUEsS0FBSSxDQUFDLFNBQVMsQ0FBQyxPQUFPLENBQUMsS0FBSyxDQUFDLEVBQTdCLENBQTZCLENBQUMsQ0FBQztRQUNoRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ2xCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQztRQUMxQyxTQUFTLEVBQUUsQ0FBQyw0QkFBWSxDQUFDO0tBQzFCLENBQUM7cUNBSWtDLDRCQUFZO0dBSG5DLGFBQWEsQ0FXekI7QUFYWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgSG90ZWwgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2hvdGVsL2hvdGVsXCI7XG5pbXBvcnQgeyBIb3RlbFNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL2hvdGVsL2hvdGVsLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwibGlzdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wibGlzdC1jb21tb24uY3NzXCIsIFwibGlzdC5jc3NcIl0sXG4gIHByb3ZpZGVyczogW0hvdGVsU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIGhvdGVsTGlzdDogQXJyYXk8SG90ZWw+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBob3RlbFNlcnZpY2U6IEhvdGVsU2VydmljZSkge31cblxuICBuZ09uSW5pdCgpIHtcbiAgICB0aGlzLmhvdGVsU2VydmljZS5saXN0KClcbiAgICAuc3Vic2NyaWJlKGxpc3RPZkhvdGVscyA9PiB7ICAgICAgXG4gICAgICBsaXN0T2ZIb3RlbHMuZm9yRWFjaCggaG90ZWwgPT4gdGhpcy5ob3RlbExpc3QudW5zaGlmdChob3RlbCkpO1xuICAgIH0pO1xuICB9XG59Il19