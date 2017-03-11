"use strict";
var core_1 = require("@angular/core");
var apartment_service_1 = require("../../shared/apartment/apartment.service");
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
        providers: [apartment_service_1.ApartmentService]
    }),
    __metadata("design:paramtypes", [apartment_service_1.ApartmentService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBRXpFLDhFQUE0RTtBQVM1RSxJQUFhLGFBQWE7SUFHeEIsdUJBQW9CLE9BQXlCO1FBQXpCLFlBQU8sR0FBUCxPQUFPLENBQWtCO1FBRjdDLFNBQUksR0FBcUIsRUFBRSxDQUFDO0lBRW9CLENBQUM7SUFFakQsZ0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLE9BQU8sQ0FBQyxJQUFJLENBQUMsR0FBRyxDQUFDLENBQUEsS0FBSzthQUMxQixTQUFTLENBQUMsVUFBQSxJQUFJO1lBQ2IsSUFBSSxDQUFDLE9BQU8sQ0FBRSxVQUFBLElBQUksSUFBSSxPQUFBLEtBQUksQ0FBQyxJQUFJLENBQUMsT0FBTyxDQUFDLElBQUksQ0FBQyxFQUF2QixDQUF1QixDQUFDLENBQUM7UUFDakQsQ0FBQyxDQUFDLENBQUM7SUFDTCxDQUFDO0lBQ0gsb0JBQUM7QUFBRCxDQUFDLEFBWEQsSUFXQztBQVhZLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNsQixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsV0FBVztRQUN4QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUM7UUFDMUMsU0FBUyxFQUFFLENBQUMsb0NBQWdCLENBQUM7S0FDOUIsQ0FBQztxQ0FJNkIsb0NBQWdCO0dBSGxDLGFBQWEsQ0FXekI7QUFYWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQXBhcnRtZW50IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9hcGFydG1lbnQvYXBhcnRtZW50XCI7XG5pbXBvcnQgeyBBcGFydG1lbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9hcGFydG1lbnQvYXBhcnRtZW50LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwibGlzdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wibGlzdC1jb21tb24uY3NzXCIsIFwibGlzdC5jc3NcIl0sXG4gIHByb3ZpZGVyczogW0FwYXJ0bWVudFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBsaXN0OiBBcnJheTxBcGFydG1lbnQ+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBzZXJ2aWNlOiBBcGFydG1lbnRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuc2VydmljZS5saXN0KFwiMVwiKS8vPz8/XG4gICAgLnN1YnNjcmliZShsaXN0ID0+IHsgICAgICBcbiAgICAgIGxpc3QuZm9yRWFjaCggaXRlbSA9PiB0aGlzLmxpc3QudW5zaGlmdChpdGVtKSk7XG4gICAgfSk7XG4gIH1cbn0iXX0=