"use strict";
var core_1 = require("@angular/core");
var client_service_1 = require("../../shared/client/client.service");
var ListComponent = (function () {
    function ListComponent(clientService) {
        this.clientService = clientService;
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
ListComponent = __decorate([
    core_1.Component({
        moduleId: module.id,
        selector: "list",
        templateUrl: "list.html",
        styleUrls: ["list-common.css", "list.css"],
        providers: [client_service_1.ClientService]
    }),
    __metadata("design:paramtypes", [client_service_1.ClientService])
], ListComponent);
exports.ListComponent = ListComponent;
//# sourceMappingURL=data:application/json;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoibGlzdC5jb21wb25lbnQuanMiLCJzb3VyY2VSb290IjoiIiwic291cmNlcyI6WyJsaXN0LmNvbXBvbmVudC50cyJdLCJuYW1lcyI6W10sIm1hcHBpbmdzIjoiO0FBQUEsc0NBQXlFO0FBRXpFLHFFQUFtRTtBQVNuRSxJQUFhLGFBQWE7SUFHeEIsdUJBQW9CLGFBQTRCO1FBQTVCLGtCQUFhLEdBQWIsYUFBYSxDQUFlO1FBRmhELGVBQVUsR0FBa0IsRUFBRSxDQUFDO0lBRW9CLENBQUM7SUFFcEQsZ0NBQVEsR0FBUjtRQUFBLGlCQUtDO1FBSkMsSUFBSSxDQUFDLGFBQWEsQ0FBQyxJQUFJLEVBQUU7YUFDeEIsU0FBUyxDQUFDLFVBQUEsYUFBYTtZQUN0QixhQUFhLENBQUMsT0FBTyxDQUFFLFVBQUEsTUFBTSxJQUFJLE9BQUEsS0FBSSxDQUFDLFVBQVUsQ0FBQyxPQUFPLENBQUMsTUFBTSxDQUFDLEVBQS9CLENBQStCLENBQUMsQ0FBQztRQUNwRSxDQUFDLENBQUMsQ0FBQztJQUNMLENBQUM7SUFDSCxvQkFBQztBQUFELENBQUMsQUFYRCxJQVdDO0FBWFksYUFBYTtJQVB6QixnQkFBUyxDQUFDO1FBQ1YsUUFBUSxFQUFFLE1BQU0sQ0FBQyxFQUFFO1FBQ2xCLFFBQVEsRUFBRSxNQUFNO1FBQ2hCLFdBQVcsRUFBRSxXQUFXO1FBQ3hCLFNBQVMsRUFBRSxDQUFDLGlCQUFpQixFQUFFLFVBQVUsQ0FBQztRQUMxQyxTQUFTLEVBQUUsQ0FBQyw4QkFBYSxDQUFDO0tBQzNCLENBQUM7cUNBSW1DLDhCQUFhO0dBSHJDLGFBQWEsQ0FXekI7QUFYWSxzQ0FBYSIsInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IENvbXBvbmVudCwgRWxlbWVudFJlZiwgT25Jbml0LCBWaWV3Q2hpbGQgfSBmcm9tIFwiQGFuZ3VsYXIvY29yZVwiO1xuaW1wb3J0IHsgQ2xpZW50IH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jbGllbnQvY2xpZW50XCI7XG5pbXBvcnQgeyBDbGllbnRTZXJ2aWNlIH0gZnJvbSBcIi4uLy4uL3NoYXJlZC9jbGllbnQvY2xpZW50LnNlcnZpY2VcIjtcblxuQENvbXBvbmVudCh7XG5cdG1vZHVsZUlkOiBtb2R1bGUuaWQsXG4gIHNlbGVjdG9yOiBcImxpc3RcIixcbiAgdGVtcGxhdGVVcmw6IFwibGlzdC5odG1sXCIsXG4gIHN0eWxlVXJsczogW1wibGlzdC1jb21tb24uY3NzXCIsIFwibGlzdC5jc3NcIl0sXG4gIHByb3ZpZGVyczogW0NsaWVudFNlcnZpY2VdXG59KVxuZXhwb3J0IGNsYXNzIExpc3RDb21wb25lbnQgaW1wbGVtZW50cyBPbkluaXQge1xuICBjbGllbnRMaXN0OiBBcnJheTxDbGllbnQ+ID0gW107XG5cbiAgY29uc3RydWN0b3IocHJpdmF0ZSBjbGllbnRTZXJ2aWNlOiBDbGllbnRTZXJ2aWNlKSB7fVxuXG4gIG5nT25Jbml0KCkge1xuICAgIHRoaXMuY2xpZW50U2VydmljZS5saXN0KClcbiAgICAuc3Vic2NyaWJlKGxpc3RPZkNsaWVudHMgPT4geyAgICAgIFxuICAgICAgbGlzdE9mQ2xpZW50cy5mb3JFYWNoKCBjbGllbnQgPT4gdGhpcy5jbGllbnRMaXN0LnVuc2hpZnQoY2xpZW50KSk7XG4gICAgfSk7XG4gIH1cbn0iXX0=