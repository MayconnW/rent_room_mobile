"use strict";
var core_1 = require("@angular/core");
var room_service_1 = require("../../shared/room/room.service");
var ListComponent = (function () {
    function ListComponent(service) {
        this.service = service;
        this.list = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.service.list("1") //???
            .subscribe(function (list) {
            list.forEach(function (item) { return _this.list.unshift(item); });
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
        providers: [room_service_1.RoomService]
    }),
    __metadata("design:paramtypes", [room_service_1.RoomService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBRXpFLCtEQUE2RDtBQVM3RCxJQUFhLGFBQWE7SUFHeEIsdUJBQW9CLE9BQW9CO1FBQXBCLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFGeEMsU0FBSSxHQUFnQixFQUFFLENBQUM7SUFFb0IsQ0FBQztJQUU1QyxnQ0FBUSxHQUFSO1FBQUEsaUJBS0M7UUFKQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxHQUFHLENBQUMsQ0FBQSxLQUFLO2FBQzFCLFNBQVMsQ0FBQyxVQUFBLElBQUk7WUFDYixJQUFJLENBQUMsT0FBTyxDQUFFLFVBQUEsSUFBSSxJQUFJLE9BQUEsS0FBSSxDQUFDLElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQXZCLENBQXVCLENBQUMsQ0FBQztRQUNqRCxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ2xCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQztRQUMxQyxTQUFTLEVBQUUsQ0FBQywwQkFBVyxDQUFDO0tBQ3pCLENBQUM7cUNBSTZCLDBCQUFXO0dBSDdCLGFBQWEsQ0FXekI7QUFYWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUm9vbSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcm9vbS9yb29tXCI7XG5pbXBvcnQgeyBSb29tU2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvcm9vbS9yb29tLnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwibGlzdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wibGlzdC1jb21tb24uY3NzXCIsIFwibGlzdC5jc3NcIl0sXG4gIHByb3ZpZGVyczogW1Jvb21TZXJ2aWNlXVxufSlcbmV4cG9ydCBjbGFzcyBMaXN0Q29tcG9uZW50IGltcGxlbWVudHMgT25Jbml0IHtcbiAgbGlzdDogQXJyYXk8Um9vbT4gPSBbXTtcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IFJvb21TZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VydmljZS5saXN0KFwiMVwiKS8vPz8/XG4gICAgLnN1YnNjcmliZShsaXN0ID0+IHsgICAgICBcbiAgICAgIGxpc3QuZm9yRWFjaCggaXRlbSA9PiB0aGlzLmxpc3QudW5zaGlmdChpdGVtKSk7XG4gICAgfSk7XG4gIH1cbn0iXX0=