"use strict";
var core_1 = require("@angular/core");
var apartment_service_1 = require("../../shared/apartment/apartment.service");
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
        var id = this.route.snapshot.params['hotel_id'];
        this.service.list(id)
            .subscribe(function (list) {
            list.forEach(function (item) { return _this.list.unshift(item); });
        });
    };
    ListComponent.prototype.listRooms = function (apartmentId) {
        var p = apartmentId.toString();
        this.router.navigate(["/rooms", p]);
    };
    return ListComponent;
}());
ListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list",
        templateUrl: "list.html",
        styleUrls: ["list-common.css", "list.css"],
        providers: [apartment_service_1.ApartmentService]
    }),
    __metadata("design:paramtypes", [apartment_service_1.ApartmentService,
        router_1.ActivatedRoute,
        router_1.Router])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQThEO0FBRTlELDhFQUE0RTtBQUU1RSwwQ0FBa0U7QUFDbEUsdUNBQXFDO0FBU3JDLElBQWEsYUFBYTtJQUd4Qix1QkFBb0IsT0FBeUIsRUFDekIsS0FBcUIsRUFDckIsTUFBYztRQUZkLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBQ3pCLFVBQUssR0FBTCxLQUFLLENBQWdCO1FBQ3JCLFdBQU0sR0FBTixNQUFNLENBQVE7UUFKbEMsU0FBSSxHQUFxQixFQUFFLENBQUM7SUFLNUIsQ0FBQztJQUVELGdDQUFRLEdBQVI7UUFBQSxpQkFNQztRQUxDLElBQUksRUFBRSxHQUFVLElBQUksQ0FBQyxLQUFLLENBQUMsUUFBUSxDQUFDLE1BQU0sQ0FBQyxVQUFVLENBQUMsQ0FBQztRQUN2RCxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUFFLENBQUM7YUFDbEIsU0FBUyxDQUFDLFVBQUEsSUFBSTtZQUNiLElBQUksQ0FBQyxPQUFPLENBQUUsVUFBQSxJQUFJLElBQUksT0FBQSxLQUFJLENBQUMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsRUFBdkIsQ0FBdUIsQ0FBQyxDQUFDO1FBQ2pELENBQUMsQ0FBQyxDQUFBO0lBQ04sQ0FBQztJQUVELGlDQUFTLEdBQVQsVUFBVSxXQUFtQjtRQUMzQixJQUFJLENBQUMsR0FBVSxXQUFXLENBQUMsUUFBUSxFQUFFLENBQUM7UUFDdEMsSUFBSSxDQUFDLE1BQU0sQ0FBQyxRQUFRLENBQUMsQ0FBQyxRQUFRLEVBQUMsQ0FBQyxDQUFDLENBQUMsQ0FBQztJQUNyQyxDQUFDO0lBRUgsb0JBQUM7QUFBRCxDQUFDLEFBckJELElBcUJDO0FBckJZLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNsQixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsV0FBVztRQUN4QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUM7UUFDMUMsU0FBUyxFQUFFLENBQUMsb0NBQWdCLENBQUM7S0FDOUIsQ0FBQztxQ0FJNkIsb0NBQWdCO1FBQ2xCLHVCQUFjO1FBQ2IsZUFBTTtHQUx2QixhQUFhLENBcUJ6QjtBQXJCWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0IH0gZnJvbSBcIkBhbmd1bGFyL2NvcmVcIjtcbmltcG9ydCB7IEFwYXJ0bWVudCB9IGZyb20gXCIuLi8uLi9zaGFyZWQvYXBhcnRtZW50L2FwYXJ0bWVudFwiO1xuaW1wb3J0IHsgQXBhcnRtZW50U2VydmljZSB9IGZyb20gXCIuLi8uLi9zaGFyZWQvYXBhcnRtZW50L2FwYXJ0bWVudC5zZXJ2aWNlXCI7XG5cbmltcG9ydCB7IFJvdXRlciwgQWN0aXZhdGVkUm91dGUsIFBhcmFtcyAgfSBmcm9tIFwiQGFuZ3VsYXIvcm91dGVyXCI7XG5pbXBvcnQgXCJyeGpzL2FkZC9vcGVyYXRvci9zd2l0Y2hNYXBcIjtcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwibGlzdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wibGlzdC1jb21tb24uY3NzXCIsIFwibGlzdC5jc3NcIl0sXG4gIHByb3ZpZGVyczogW0FwYXJ0bWVudFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsaXN0OiBBcnJheTxBcGFydG1lbnQ+ID0gW107ICBcblxuICBjb25zdHJ1Y3Rvcihwcml2YXRlIHNlcnZpY2U6IEFwYXJ0bWVudFNlcnZpY2UsXG4gICAgICAgICAgICAgIHByaXZhdGUgcm91dGU6IEFjdGl2YXRlZFJvdXRlLFxuICAgICAgICAgICAgICBwcml2YXRlIHJvdXRlcjogUm91dGVyKSB7ICBcbiAgfVxuXG4gIG5nT25Jbml0KCkge1xuICAgIGxldCBpZDpzdHJpbmcgPSB0aGlzLnJvdXRlLnNuYXBzaG90LnBhcmFtc1snaG90ZWxfaWQnXTtcbiAgICB0aGlzLnNlcnZpY2UubGlzdChpZClcbiAgICAgIC5zdWJzY3JpYmUobGlzdCA9PiB7ICAgICAgXG4gICAgICAgIGxpc3QuZm9yRWFjaCggaXRlbSA9PiB0aGlzLmxpc3QudW5zaGlmdChpdGVtKSk7XG4gICAgICB9KSBcbiAgfVxuICBcbiAgbGlzdFJvb21zKGFwYXJ0bWVudElkOiBudW1iZXIpeyAgICBcbiAgICBsZXQgcDpTdHJpbmcgPSBhcGFydG1lbnRJZC50b1N0cmluZygpO1xuICAgIHRoaXMucm91dGVyLm5hdmlnYXRlKFtcIi9yb29tc1wiLHBdKTtcbiAgfVxuXG59Il19