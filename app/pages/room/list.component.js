"use strict";
var core_1 = require("@angular/core");
var room_service_1 = require("../../shared/room/room.service");
var router_1 = require("@angular/router");
require("rxjs/add/operator/switchMap");
var ListComponent = (function () {
    function ListComponent(service, route, router) {
        this.service = service;
        this.route = route;
        this.router = router;
        this.list = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        var id = this.route.snapshot.params['apartment_id'];
        this.service.list(id)
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
    __metadata("design:paramtypes", [room_service_1.RoomService,
        router_1.ActivatedRoute,
        router_1.Router])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQTBFO0FBRTFFLCtEQUE2RDtBQUM3RCwwQ0FBa0U7QUFDbEUsdUNBQXFDO0FBU3JDLElBQWEsYUFBYTtJQUd4Qix1QkFBb0IsT0FBb0IsRUFDcEIsS0FBcUIsRUFDckIsTUFBYztRQUZkLFlBQU8sR0FBUCxPQUFPLENBQWE7UUFDcEIsVUFBSyxHQUFMLEtBQUssQ0FBZ0I7UUFDckIsV0FBTSxHQUFOLE1BQU0sQ0FBUTtRQUpsQyxTQUFJLEdBQWdCLEVBQUUsQ0FBQztJQUt2QixDQUFDO0lBRUQsZ0NBQVEsR0FBUjtRQUFBLGlCQU1DO1FBTEMsSUFBSSxFQUFFLEdBQVUsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsTUFBTSxDQUFDLGNBQWMsQ0FBQyxDQUFDO1FBQzNELElBQUksQ0FBQyxPQUFPLENBQUMsSUFBSSxDQUFDLEVBQUUsQ0FBQzthQUNsQixTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUE7SUFDTixDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBaEJELElBZ0JDO0FBaEJZLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNsQixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsV0FBVztRQUN4QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUM7UUFDMUMsU0FBUyxFQUFFLENBQUMsMEJBQVcsQ0FBQztLQUN6QixDQUFDO3FDQUk2QiwwQkFBVztRQUNiLHVCQUFjO1FBQ2IsZUFBTTtHQUx2QixhQUFhLENBZ0J6QjtBQWhCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgSW5qZWN0YWJsZSwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IFJvb20gfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Jvb20vcm9vbVwiO1xuaW1wb3J0IHsgUm9vbVNlcnZpY2UgfSBmcm9tIFwiLi4vLi4vc2hhcmVkL3Jvb20vcm9vbS5zZXJ2aWNlXCI7XG5pbXBvcnQgeyBSb3V0ZXIsIEFjdGl2YXRlZFJvdXRlLCBQYXJhbXMgIH0gZnJvbSBcIkBhbmd1bGFyL3JvdXRlclwiO1xuaW1wb3J0IFwicnhqcy9hZGQvb3BlcmF0b3Ivc3dpdGNoTWFwXCI7XG5cbkBDb21wb25lbnQoe1xuXHRtb2R1bGVJZDogbW9kdWxlLmlkLFxuICBzZWxlY3RvcjogXCJsaXN0XCIsXG4gIHRlbXBsYXRlVXJsOiBcImxpc3QuaHRtbFwiLFxuICBzdHlsZVVybHM6IFtcImxpc3QtY29tbW9uLmNzc1wiLCBcImxpc3QuY3NzXCJdLFxuICBwcm92aWRlcnM6IFtSb29tU2VydmljZV1cbn0pXG5leHBvcnQgY2xhc3MgTGlzdENvbXBvbmVudCBpbXBsZW1lbnRzIE9uSW5pdCB7ICBcbiAgbGlzdDogQXJyYXk8Um9vbT4gPSBbXTsgIFxuXG4gIGNvbnN0cnVjdG9yKHByaXZhdGUgc2VydmljZTogUm9vbVNlcnZpY2UsICAgICAgICAgICAgICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlOiBBY3RpdmF0ZWRSb3V0ZSxcbiAgICAgICAgICAgICAgcHJpdmF0ZSByb3V0ZXI6IFJvdXRlcikgeyAgICAgICAgICAgXG4gIH0gXG5cbiAgbmdPbkluaXQoKSB7XG4gICAgbGV0IGlkOnN0cmluZyA9IHRoaXMucm91dGUuc25hcHNob3QucGFyYW1zWydhcGFydG1lbnRfaWQnXTtcbiAgICB0aGlzLnNlcnZpY2UubGlzdChpZClcbiAgICAgIC5zdWJzY3JpYmUobGlzdCA9PiB7ICAgICAgXG4gICAgICAgIGxpc3QuZm9yRWFjaCggaXRlbSA9PiB0aGlzLmxpc3QudW5zaGlmdChpdGVtKSk7XG4gICAgICB9KSBcbiAgfVxuICAgIFxufVxuXG5cbiJdfQ==