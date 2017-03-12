"use strict";
var core_1 = require("@angular/core");
var page_1 = require("ui/page");
var client_service_1 = require("../../shared/client/client.service");
var ListComponent = (function () {
    function ListComponent(clientService, page) {
        this.clientService = clientService;
        this.page = page;
        this.clientList = [];
    }
    ListComponent.prototype.ngOnInit = function () {
        var _this = this;
        this.clientService.list()
            .subscribe(function (listOfClients) {
            listOfClients.forEach(function (client) { return _this.clientList.unshift(client); });
        });
    };
    return ListComponent;
}());
__decorate([
    core_1.ViewChild("container"),
    __metadata("design:type", core_1.ElementRef)
], ListComponent.prototype, "container", void 0);
ListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list",
        templateUrl: "list.html",
        styleUrls: ["list-common.css", "list.css"],
        providers: [client_service_1.ClientService]
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService, page_1.Page])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBQ3pFLGdDQUErQjtBQUcvQixxRUFBbUU7QUFTbkUsSUFBYSxhQUFhO0lBSXhCLHVCQUFvQixhQUE0QixFQUFVLElBQVU7UUFBaEQsa0JBQWEsR0FBYixhQUFhLENBQWU7UUFBVSxTQUFJLEdBQUosSUFBSSxDQUFNO1FBSHBFLGVBQVUsR0FBa0IsRUFBRSxDQUFDO0lBR3dDLENBQUM7SUFFeEUsZ0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7YUFDeEIsU0FBUyxDQUFDLFVBQUEsYUFBYTtZQUN0QixhQUFhLENBQUMsT0FBTyxDQUFFLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFaRCxJQVlDO0FBVHlCO0lBQXZCLGdCQUFTLENBQUMsV0FBVyxDQUFDOzhCQUFZLGlCQUFVO2dEQUFDO0FBSG5DLGFBQWE7SUFQekIsZ0JBQVMsQ0FBQztRQUNWLFFBQVEsRUFBRSxNQUFNLENBQUMsRUFBRTtRQUNsQixRQUFRLEVBQUUsTUFBTTtRQUNoQixXQUFXLEVBQUUsV0FBVztRQUN4QixTQUFTLEVBQUUsQ0FBQyxpQkFBaUIsRUFBRSxVQUFVLENBQUM7UUFDMUMsU0FBUyxFQUFFLENBQUMsOEJBQWEsQ0FBQztLQUMzQixDQUFDO3FDQUttQyw4QkFBYSxFQUFnQixXQUFJO0dBSnpELGFBQWEsQ0FZekI7QUFaWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgUGFnZSB9IGZyb20gXCJ1aS9wYWdlXCI7XG5pbXBvcnQgeyBWaWV3IH0gZnJvbSBcInVpL2NvcmUvdmlld1wiO1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jbGllbnQvY2xpZW50XCI7XG5pbXBvcnQgeyBDbGllbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jbGllbnQvY2xpZW50LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwibGlzdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wibGlzdC1jb21tb24uY3NzXCIsIFwibGlzdC5jc3NcIl0sXG4gIHByb3ZpZGVyczogW0NsaWVudFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGllbnRMaXN0OiBBcnJheTxDbGllbnQ+ID0gW107XG4gIFxuICBAVmlld0NoaWxkKFwiY29udGFpbmVyXCIpIGNvbnRhaW5lcjogRWxlbWVudFJlZjtcbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjbGllbnRTZXJ2aWNlOiBDbGllbnRTZXJ2aWNlLCBwcml2YXRlIHBhZ2U6IFBhZ2UpIHt9XG5cbiAgbmdPbkluaXQoKSB7XG4gICAgdGhpcy5jbGllbnRTZXJ2aWNlLmxpc3QoKVxuICAgIC5zdWJzY3JpYmUobGlzdE9mQ2xpZW50cyA9PiB7ICAgICAgXG4gICAgICBsaXN0T2ZDbGllbnRzLmZvckVhY2goIGNsaWVudCA9PiB0aGlzLmNsaWVudExpc3QudW5zaGlmdChjbGllbnQpKTtcbiAgICB9KTtcbiAgfVxufSJdfQ==