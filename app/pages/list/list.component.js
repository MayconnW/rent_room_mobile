"use strict";
var core_1 = require("@angular/core");
var room_service_1 = require("../../shared/room/room.service");
var ListComponent = (function () {
    function ListComponent(roomService) {
        this.roomService = roomService;
        this.roomList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.roomService.list("2")
            .subscribe(function (listOfRooms) {
            listOfRooms.forEach(function (room) { return _this.roomList.unshift(room); });
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
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBRXpFLCtEQUE2RDtBQVM3RCxJQUFhLGFBQWE7SUFHeEIsdUJBQW9CLFdBQXdCO1FBQXhCLGdCQUFXLEdBQVgsV0FBVyxDQUFhO1FBRjVDLGFBQVEsR0FBZ0IsRUFBRSxDQUFDO0lBRW9CLENBQUM7SUFFaEQsZ0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLFdBQVcsQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDO2FBQ3pCLFNBQVMsQ0FBQyxVQUFBLFdBQVc7WUFDcEIsV0FBVyxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxRQUFRLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUEzQixDQUEyQixDQUFDLENBQUM7UUFDNUQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNsQixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsV0FBVztRQUN4QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUM7UUFDMUMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztLQUN6QixDQUFDO3FDQUlpQywwQkFBVztHQUhqQyxhQUFhLENBV3pCO0FBWFksc0NBQWEiLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBDb21wb25lbnQsIEVsZW1lbnRSZWYsIE9uSW5pdCwgVmlld0NoaWxkIH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Jvb20vcm9vbVwiO1xuaW1wb3J0IHsgUm9vbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlXCI7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcImxpc3QuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcImxpc3QtY29tbW9uLmNzc1wiLCBcImxpc3QuY3NzXCJdLFxuICBwcm92aWRlcnM6IFtSb29tU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7XG4gIHJvb21MaXN0OiBBcnJheTxSb29tPiA9IFtdO1xuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgcm9vbVNlcnZpY2U6IFJvb21TZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMucm9vbVNlcnZpY2UubGlzdChcIjJcIilcbiAgICAuc3Vic2NyaWJlKGxpc3RPZlJvb21zID0+IHsgICAgICBcbiAgICAgIGxpc3RPZlJvb21zLmZvckVhY2goIHJvb20gPT4gdGhpcy5yb29tTGlzdC51bnNoaWZ0KHJvb20pKTtcbiAgICB9KTtcbiAgfVxufSJdfQ==